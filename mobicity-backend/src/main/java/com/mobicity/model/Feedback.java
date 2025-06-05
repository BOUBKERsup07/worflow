package com.mobicity.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "feedbacks")
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "line_id")
    private Long lineId;

    @Column(name = "vehicle_id")
    private Long vehicleId;

    private String type; // "DELAY", "CLEANLINESS", "CROWDED", "OTHER"

    private String comment;

    private Integer rating; // 1 to 5

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "is_resolved")
    private boolean isResolved = false;

    @Column(name = "resolved_at")
    private LocalDateTime resolvedAt;

    @Column(name = "resolution_comment")
    private String resolutionComment;
}