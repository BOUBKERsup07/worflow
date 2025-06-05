package com.mobicity.repository;

import com.mobicity.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.time.LocalDateTime;
import java.util.List;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    List<Feedback> findByUserId(Long userId);
    
    List<Feedback> findByLineId(Long lineId);
    
    List<Feedback> findByVehicleId(Long vehicleId);
    
    List<Feedback> findByType(String type);
    
    List<Feedback> findByIsResolvedFalse();
    
    @Query("SELECT f FROM com.mobicity.model.Feedback f WHERE f.createdAt >= :startDate AND f.createdAt <= :endDate")
    List<Feedback> findFeedbacksBetweenDates(@Param("startDate") LocalDateTime startDate, @Param("endDate") LocalDateTime endDate);
    
    @Query("SELECT f.rating FROM com.mobicity.model.Feedback f WHERE f.lineId = :lineId")
    List<Integer> findRatingsByLineId(@Param("lineId") Long lineId);
    
    @Query("SELECT f.rating FROM com.mobicity.model.Feedback f WHERE f.vehicleId = :vehicleId")
    List<Integer> findRatingsByVehicleId(@Param("vehicleId") Long vehicleId);
}