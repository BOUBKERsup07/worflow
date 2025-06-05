package com.mobicity.controller;

import com.mobicity.model.Line;
import com.mobicity.service.LineService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/lines")
public class LineController {
    private final LineService lineService;

    public LineController(LineService lineService) {
        this.lineService = lineService;
    }

    @GetMapping
    public ResponseEntity<List<Line>> getAllLines() {
        return ResponseEntity.ok(lineService.getAllLines());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Line> getLineById(@PathVariable Long id) {
        return ResponseEntity.ok(lineService.getLineById(id));
    }

    @PostMapping
    public ResponseEntity<Line> createLine(@RequestBody Line line) {
        return ResponseEntity.ok(lineService.createLine(line));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Line> updateLine(@PathVariable Long id, @RequestBody Line line) {
        return ResponseEntity.ok(lineService.updateLine(id, line));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLine(@PathVariable Long id) {
        lineService.deleteLine(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/type/{type}")
    public ResponseEntity<List<Line>> getLinesByType(@PathVariable String type) {
        return ResponseEntity.ok(lineService.getLinesByType(type));
    }

    @GetMapping("/active")
    public ResponseEntity<List<Line>> getActiveLines() {
        return ResponseEntity.ok(lineService.getActiveLines());
    }

    @GetMapping("/number/{number}")
    public ResponseEntity<Line> getLineByNumber(@PathVariable String number) {
        return ResponseEntity.ok(lineService.getLineByNumber(number));
    }

    @GetMapping("/stop/{stopId}")
    public ResponseEntity<List<Line>> getLinesByStop(@PathVariable Long stopId) {
        return ResponseEntity.ok(lineService.getLinesByStop(stopId));
    }
}