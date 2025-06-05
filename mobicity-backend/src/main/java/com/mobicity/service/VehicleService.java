package com.mobicity.service;

import com.mobicity.model.Vehicle;
import com.mobicity.repository.VehicleRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class VehicleService {
    private final VehicleRepository vehicleRepository;

    public VehicleService(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    public Vehicle getVehicleById(Long id) {
        return vehicleRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Vehicle not found"));
    }

    public Vehicle createVehicle(Vehicle vehicle) {
        vehicle.setLastUpdate(LocalDateTime.now());
        return vehicleRepository.save(vehicle);
    }

    public Vehicle updateVehicle(Long id, Vehicle vehicle) {
        Vehicle existingVehicle = getVehicleById(id);
        existingVehicle.setRegistrationNumber(vehicle.getRegistrationNumber());
        existingVehicle.setType(vehicle.getType());
        existingVehicle.setLine(vehicle.getLine());
        existingVehicle.setLatitude(vehicle.getLatitude());
        existingVehicle.setLongitude(vehicle.getLongitude());
        existingVehicle.setLastUpdate(LocalDateTime.now());
        existingVehicle.setActive(vehicle.isActive());
        existingVehicle.setCurrentSpeed(vehicle.getCurrentSpeed());
        existingVehicle.setCurrentDirection(vehicle.getCurrentDirection());
        return vehicleRepository.save(existingVehicle);
    }

    public void deleteVehicle(Long id) {
        vehicleRepository.deleteById(id);
    }

    public List<Vehicle> getVehiclesByLine(Long lineId) {
        return vehicleRepository.findByLineId(lineId);
    }

    public List<Vehicle> getVehiclesByType(String type) {
        return vehicleRepository.findByType(type);
    }

    public List<Vehicle> getActiveVehicles() {
        return vehicleRepository.findByIsActiveTrue();
    }

    public List<Vehicle> getRealTimeVehicles() {
        LocalDateTime timeThreshold = LocalDateTime.now().minusMinutes(5);
        return vehicleRepository.findByLastUpdateAfter(timeThreshold);
    }

    public Vehicle getVehicleByRegistrationNumber(String registrationNumber) {
        return vehicleRepository.findByRegistrationNumber(registrationNumber);
    }

    public List<Vehicle> getVehiclesInArea(Double latitude, Double longitude, Double radius) {
        // Convert radius from kilometers to degrees (approximate)
        Double latDelta = radius / 111.0;
        Double lngDelta = radius / (111.0 * Math.cos(Math.toRadians(latitude)));

        return vehicleRepository.findVehiclesInArea(
            latitude - latDelta,
            latitude + latDelta,
            longitude - lngDelta,
            longitude + lngDelta
        );
    }
}