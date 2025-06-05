package com.mobicity.controller;

import com.mobicity.model.Stop;
import com.mobicity.service.StopService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stops")
public class StopController {
    private final StopService stopService;

    public StopController(StopService stopService) {
        this.stopService = stopService;
    }

    @GetMapping
    public ResponseEntity<List<Stop>> getAllStops() {
        return ResponseEntity.ok(stopService.getAllStops());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Stop> getStopById(@PathVariable Long id) {
        return ResponseEntity.ok(stopService.getStopById(id));
    }

    @PostMapping
    public ResponseEntity<Stop> createStop(@RequestBody Stop stop) {
        return ResponseEntity.ok(stopService.createStop(stop));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Stop> updateStop(@PathVariable Long id, @RequestBody Stop stop) {
        return ResponseEntity.ok(stopService.updateStop(id, stop));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStop(@PathVariable Long id) {
        stopService.deleteStop(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/city/{city}")
    public ResponseEntity<List<Stop>> getStopsByCity(@PathVariable String city) {
        return ResponseEntity.ok(stopService.getStopsByCity(city));
    }

    @GetMapping("/bus")
    public ResponseEntity<List<Stop>> getBusStops() {
        return ResponseEntity.ok(stopService.getBusStops());
    }

    @GetMapping("/tram")
    public ResponseEntity<List<Stop>> getTramStops() {
        return ResponseEntity.ok(stopService.getTramStops());
    }

    @GetMapping("/nearby")
    public ResponseEntity<List<Stop>> getNearbyStops(
            @RequestParam Double latitude,
            @RequestParam Double longitude,
            @RequestParam Double radius) {
        return ResponseEntity.ok(stopService.getNearbyStops(latitude, longitude, radius));
    }

    @GetMapping("/code/{code}")
    public ResponseEntity<Stop> getStopByCode(@PathVariable String code) {
        return ResponseEntity.ok(stopService.getStopByCode(code));
    }
} 