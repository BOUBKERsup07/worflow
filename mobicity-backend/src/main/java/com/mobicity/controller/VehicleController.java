package com.mobicity.controller;

import com.mobicity.model.Vehicle;
import com.mobicity.service.VehicleService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vehicles")
public class VehicleController {
    private final VehicleService vehicleService;

    public VehicleController(VehicleService vehicleService) {
        this.vehicleService = vehicleService;
    }

    @GetMapping
    public ResponseEntity<List<Vehicle>> getAllVehicles() {
        return ResponseEntity.ok(vehicleService.getAllVehicles());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Vehicle> getVehicleById(@PathVariable Long id) {
        return ResponseEntity.ok(vehicleService.getVehicleById(id));
    }

    @PostMapping
    public ResponseEntity<Vehicle> createVehicle(@RequestBody Vehicle vehicle) {
        return ResponseEntity.ok(vehicleService.createVehicle(vehicle));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Vehicle> updateVehicle(@PathVariable Long id, @RequestBody Vehicle vehicle) {
        return ResponseEntity.ok(vehicleService.updateVehicle(id, vehicle));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVehicle(@PathVariable Long id) {
        vehicleService.deleteVehicle(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/line/{lineId}")
    public ResponseEntity<List<Vehicle>> getVehiclesByLine(@PathVariable Long lineId) {
        return ResponseEntity.ok(vehicleService.getVehiclesByLine(lineId));
    }

    @GetMapping("/type/{type}")
    public ResponseEntity<List<Vehicle>> getVehiclesByType(@PathVariable String type) {
        return ResponseEntity.ok(vehicleService.getVehiclesByType(type));
    }

    @GetMapping("/active")
    public ResponseEntity<List<Vehicle>> getActiveVehicles() {
        return ResponseEntity.ok(vehicleService.getActiveVehicles());
    }

    @GetMapping("/realtime")
    public ResponseEntity<List<Vehicle>> getRealTimeVehicles() {
        return ResponseEntity.ok(vehicleService.getRealTimeVehicles());
    }

    @GetMapping("/registration/{registrationNumber}")
    public ResponseEntity<Vehicle> getVehicleByRegistrationNumber(@PathVariable String registrationNumber) {
        return ResponseEntity.ok(vehicleService.getVehicleByRegistrationNumber(registrationNumber));
    }

    @GetMapping("/nearby")
    public ResponseEntity<List<Vehicle>> getVehiclesInArea(
            @RequestParam Double latitude,
            @RequestParam Double longitude,
            @RequestParam Double radius) {
        return ResponseEntity.ok(vehicleService.getVehiclesInArea(latitude, longitude, radius));
    }
}