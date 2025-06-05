package com.mobicity.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;
import lombok.Data;

@Data
@Entity(name = "stops")
public class Stop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String code;

    private Double latitude;

    private Double longitude;

    private String city;

    private String address;

    @Column(name = "is_bus_stop")
    private boolean isBusStop;

    @Column(name = "is_tram_stop")
    private boolean isTramStop;

    private String description;
}