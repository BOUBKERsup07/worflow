package com.mobicity.repository;

import com.mobicity.model.Line;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface LineRepository extends JpaRepository<Line, Long> {
    List<Line> findByType(String type);
    
    List<Line> findByIsActiveTrue();
    
    Line findByNumber(String number);
    
    @Query("SELECT l FROM com.mobicity.model.Line l JOIN l.stops s WHERE s.id = :stopId")
    List<Line> findByStopsId(@Param("stopId") Long stopId);
}