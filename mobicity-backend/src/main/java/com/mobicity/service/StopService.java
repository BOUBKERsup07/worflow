package com.mobicity.service;

import com.mobicity.model.Stop;
import com.mobicity.repository.StopRepository;
import com.mobicity.exception.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StopService {
    private final StopRepository stopRepository;

    public StopService(StopRepository stopRepository) {
        this.stopRepository = stopRepository;
    }

    public List<Stop> getAllStops() {
        return stopRepository.findAll();
    }

    public Stop getStopById(Long id) {
        return stopRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Stop", "id", id.toString()));
    }

    public Stop createStop(Stop stop) {
        return stopRepository.save(stop);
    }

    public Stop updateStop(Long id, Stop stop) {
        Stop existingStop = getStopById(id);
        existingStop.setName(stop.getName());
        existingStop.setCode(stop.getCode());
        existingStop.setLatitude(stop.getLatitude());
        existingStop.setLongitude(stop.getLongitude());
        existingStop.setCity(stop.getCity());
        existingStop.setAddress(stop.getAddress());
        existingStop.setBusStop(stop.isBusStop());
        existingStop.setTramStop(stop.isTramStop());
        existingStop.setDescription(stop.getDescription());
        return stopRepository.save(existingStop);
    }

    public void deleteStop(Long id) {
        getStopById(id); // Verify stop exists before deletion
        stopRepository.deleteById(id);
    }

    public List<Stop> getStopsByCity(String city) {
        return stopRepository.findByCity(city);
    }

    public List<Stop> getBusStops() {
        return stopRepository.findByIsBusStopTrue();
    }

    public List<Stop> getTramStops() {
        return stopRepository.findByIsTramStopTrue();
    }

    public List<Stop> getNearbyStops(Double latitude, Double longitude, Double radius) {
        if (latitude == null || longitude == null || radius == null) {
            throw new IllegalArgumentException("Latitude, longitude and radius must not be null");
        }
        if (radius < 0) {
            throw new IllegalArgumentException("Radius must be positive");
        }
        if (latitude < -90 || latitude > 90) {
            throw new IllegalArgumentException("Latitude must be between -90 and 90 degrees");
        }
        if (longitude < -180 || longitude > 180) {
            throw new IllegalArgumentException("Longitude must be between -180 and 180 degrees");
        }

        // Convert radius from kilometers to degrees (more precise calculation)
        // Earth's radius at the equator is approximately 6378.137 km
        Double latDelta = (radius / 6378.137) * (180 / Math.PI);
        Double lngDelta = (radius / 6378.137) * (180 / Math.PI) / Math.cos(Math.toRadians(latitude));

        return stopRepository.findNearbyStops(
            latitude - latDelta,
            latitude + latDelta,
            longitude - lngDelta,
            longitude + lngDelta
        );
    }

    public Stop getStopByCode(String code) {
        Stop stop = stopRepository.findByCode(code);
        if (stop == null) {
            throw new ResourceNotFoundException("Stop", "code", code);
        }
        return stop;
    }
}