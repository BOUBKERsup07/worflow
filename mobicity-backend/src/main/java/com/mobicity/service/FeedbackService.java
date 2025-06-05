package com.mobicity.service;

import com.mobicity.model.Feedback;
import com.mobicity.repository.FeedbackRepository;
import com.mobicity.exception.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class FeedbackService {
    private final FeedbackRepository feedbackRepository;

    public FeedbackService(FeedbackRepository feedbackRepository) {
        this.feedbackRepository = feedbackRepository;
    }

    public List<Feedback> getAllFeedbacks() {
        return feedbackRepository.findAll();
    }

    public Feedback getFeedbackById(Long id) {
        return feedbackRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Feedback", "id", id.toString()));
    }

    public Feedback createFeedback(Feedback feedback) {
        feedback.setCreatedAt(LocalDateTime.now());
        return feedbackRepository.save(feedback);
    }

    public Feedback updateFeedback(Long id, Feedback feedback) {
        Feedback existingFeedback = getFeedbackById(id);
        existingFeedback.setType(feedback.getType());
        existingFeedback.setComment(feedback.getComment());
        existingFeedback.setRating(feedback.getRating());
        existingFeedback.setUserId(feedback.getUserId());
        existingFeedback.setLineId(feedback.getLineId());
        existingFeedback.setVehicleId(feedback.getVehicleId());
        existingFeedback.setResolved(feedback.isResolved());
        if (feedback.getResolutionComment() != null) {
            existingFeedback.setResolutionComment(feedback.getResolutionComment());
            existingFeedback.setResolvedAt(LocalDateTime.now());
        }
        return feedbackRepository.save(existingFeedback);
    }

    public void deleteFeedback(Long id) {
        getFeedbackById(id); // Verify feedback exists before deletion
        feedbackRepository.deleteById(id);
    }

    public List<Feedback> getFeedbacksByUser(Long userId) {
        return feedbackRepository.findByUserId(userId);
    }

    public List<Feedback> getFeedbacksByLine(Long lineId) {
        return feedbackRepository.findByLineId(lineId);
    }

    public List<Feedback> getFeedbacksByVehicle(Long vehicleId) {
        return feedbackRepository.findByVehicleId(vehicleId);
    }

    public List<Feedback> getFeedbacksByType(String type) {
        return feedbackRepository.findByType(type);
    }

    public List<Feedback> getUnresolvedFeedbacks() {
        return feedbackRepository.findByIsResolvedFalse();
    }

    public List<Feedback> getFeedbacksBetweenDates(LocalDateTime startDate, LocalDateTime endDate) {
        return feedbackRepository.findFeedbacksBetweenDates(startDate, endDate);
    }

    public Double getAverageRatingForLine(Long lineId) {
        List<Integer> ratings = feedbackRepository.findRatingsByLineId(lineId);
        if (ratings.isEmpty()) {
            return 0.0;
        }
        return ratings.stream()
                .mapToDouble(Integer::doubleValue)
                .average()
                .orElse(0.0);
    }

    public Double getAverageRatingForVehicle(Long vehicleId) {
        List<Integer> ratings = feedbackRepository.findRatingsByVehicleId(vehicleId);
        if (ratings.isEmpty()) {
            return 0.0;
        }
        return ratings.stream()
                .mapToDouble(Integer::doubleValue)
                .average()
                .orElse(0.0);
    }

    public Feedback resolveFeedback(Long id, String resolutionComment) {
        Feedback feedback = getFeedbackById(id);
        feedback.setResolved(true);
        feedback.setResolvedAt(LocalDateTime.now());
        feedback.setResolutionComment(resolutionComment);
        return feedbackRepository.save(feedback);
    }
} 