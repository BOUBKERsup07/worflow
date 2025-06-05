package com.mobicity.service;

import com.mobicity.model.Line;
import com.mobicity.repository.LineRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class LineService {
    private final LineRepository lineRepository;

    public LineService(LineRepository lineRepository) {
        this.lineRepository = lineRepository;
    }

    public List<Line> getAllLines() {
        return lineRepository.findAll();
    }

    public Line getLineById(Long id) {
        return lineRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Line not found"));
    }

    public Line createLine(Line line) {
        return lineRepository.save(line);
    }

    public Line updateLine(Long id, Line line) {
        Line existingLine = getLineById(id);
        existingLine.setNumber(line.getNumber());
        existingLine.setName(line.getName());
        existingLine.setType(line.getType());
        existingLine.setDescription(line.getDescription());
        existingLine.setStops(line.getStops());
        existingLine.setActive(line.isActive());
        return lineRepository.save(existingLine);
    }

    public void deleteLine(Long id) {
        lineRepository.deleteById(id);
    }

    public List<Line> getLinesByType(String type) {
        return lineRepository.findByType(type);
    }

    public List<Line> getActiveLines() {
        return lineRepository.findByIsActiveTrue();
    }

    public Line getLineByNumber(String number) {
        return lineRepository.findByNumber(number);
    }

    public List<Line> getLinesByStop(Long stopId) {
        return lineRepository.findByStopsId(stopId);
    }
}