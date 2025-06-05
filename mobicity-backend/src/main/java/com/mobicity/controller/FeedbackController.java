package com.mobicity.controller;

import com.mobicity.model.Feedback;
import com.mobicity.service.FeedbackService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/feedbacks")
public class FeedbackController {
    private final FeedbackService feedbackService;

    public FeedbackController(FeedbackService feedbackService) {
        this.feedbackService = feedbackService;
    }

    @GetMapping
    public ResponseEntity<List<Feedback>> getAllFeedbacks() {
        return ResponseEntity.ok(feedbackService.getAllFeedbacks());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Feedback> getFeedbackById(@PathVariable Long id) {
        return ResponseEntity.ok(feedbackService.getFeedbackById(id));
    }

    @PostMapping
    public ResponseEntity<Feedback> createFeedback(@RequestBody Feedback feedback) {
        return ResponseEntity.ok(feedbackService.createFeedback(feedback));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Feedback> updateFeedback(@PathVariable Long id, @RequestBody Feedback feedback) {
        return ResponseEntity.ok(feedbackService.updateFeedback(id, feedback));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFeedback(@PathVariable Long id) {
        feedbackService.deleteFeedback(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Feedback>> getFeedbacksByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(feedbackService.getFeedbacksByUser(userId));
    }

    @GetMapping("/line/{lineId}")
    public ResponseEntity<List<Feedback>> getFeedbacksByLine(@PathVariable Long lineId) {
        return ResponseEntity.ok(feedbackService.getFeedbacksByLine(lineId));
    }

    @GetMapping("/vehicle/{vehicleId}")
    public ResponseEntity<List<Feedback>> getFeedbacksByVehicle(@PathVariable Long vehicleId) {
        return ResponseEntity.ok(feedbackService.getFeedbacksByVehicle(vehicleId));
    }

    @GetMapping("/type/{type}")
    public ResponseEntity<List<Feedback>> getFeedbacksByType(@PathVariable String type) {
        return ResponseEntity.ok(feedbackService.getFeedbacksByType(type));
    }

    @GetMapping("/unresolved")
    public ResponseEntity<List<Feedback>> getUnresolvedFeedbacks() {
        return ResponseEntity.ok(feedbackService.getUnresolvedFeedbacks());
    }

    @GetMapping("/between-dates")
    public ResponseEntity<List<Feedback>> getFeedbacksBetweenDates(
            @RequestParam LocalDateTime startDate,
            @RequestParam LocalDateTime endDate) {
        return ResponseEntity.ok(feedbackService.getFeedbacksBetweenDates(startDate, endDate));
    }

    @GetMapping("/line/{lineId}/rating")
    public ResponseEntity<Double> getAverageRatingForLine(@PathVariable Long lineId) {
        return ResponseEntity.ok(feedbackService.getAverageRatingForLine(lineId));
    }

    @GetMapping("/vehicle/{vehicleId}/rating")
    public ResponseEntity<Double> getAverageRatingForVehicle(@PathVariable Long vehicleId) {
        return ResponseEntity.ok(feedbackService.getAverageRatingForVehicle(vehicleId));
    }

    @PostMapping("/{id}/resolve")
    public ResponseEntity<Feedback> resolveFeedback(
            @PathVariable Long id,
            @RequestBody String resolutionComment) {
        return ResponseEntity.ok(feedbackService.resolveFeedback(id, resolutionComment));
    }
} 