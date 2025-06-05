package com.mobicity.repository;

import com.mobicity.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
    List<Vehicle> findByLineId(Long lineId);
    
    List<Vehicle> findByType(String type);
    
    List<Vehicle> findByIsActiveTrue();
    
    @Query("SELECT v FROM com.mobicity.model.Vehicle v WHERE v.lastUpdate >= :timestamp")
    List<Vehicle> findByLastUpdateAfter(@Param("timestamp") LocalDateTime timestamp);
    
    Vehicle findByRegistrationNumber(String registrationNumber);
    
    @Query("SELECT v FROM com.mobicity.model.Vehicle v WHERE v.latitude >= :minLat AND v.latitude <= :maxLat AND v.longitude >= :minLng AND v.longitude <= :maxLng")
    List<Vehicle> findVehiclesInArea(@Param("minLat") Double minLat, @Param("maxLat") Double maxLat, @Param("minLng") Double minLng, @Param("maxLng") Double maxLng);
}