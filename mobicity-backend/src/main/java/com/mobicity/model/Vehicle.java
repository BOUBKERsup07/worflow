package com.mobicity.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity(name = "vehicles")
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String registrationNumber;

    private String type; // "BUS" or "TRAM"

    @ManyToOne
    @JoinColumn(name = "line_id")
    private Line line;
    
    @Column(name = "line_id", insertable = false, updatable = false)
    private Long lineId;

    private Double latitude;

    private Double longitude;

    @Column(name = "last_update")
    private LocalDateTime lastUpdate;

    @Column(name = "is_active")
    private boolean isActive = true;

    @Column(name = "current_speed")
    private Double currentSpeed;

    @Column(name = "current_direction")
    private Integer currentDirection; // in degrees
}