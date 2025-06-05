package com.mobicity.repository;

import com.mobicity.model.Stop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface StopRepository extends JpaRepository<Stop, Long> {
    List<Stop> findByCity(String city);
    
    List<Stop> findByIsBusStopTrue();
    
    List<Stop> findByIsTramStopTrue();
    
    @Query("SELECT s FROM com.mobicity.model.Stop s WHERE s.latitude >= :minLat AND s.latitude <= :maxLat AND s.longitude >= :minLng AND s.longitude <= :maxLng")
    List<Stop> findNearbyStops(@Param("minLat") Double minLat, @Param("maxLat") Double maxLat, @Param("minLng") Double minLng, @Param("maxLng") Double maxLng);
    
    Stop findByCode(String code);
}