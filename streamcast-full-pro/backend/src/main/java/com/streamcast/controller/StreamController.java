package com.streamcast.controller;

import com.streamcast.model.StreamSession;
import com.streamcast.repository.StreamSessionRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/streams")
@CrossOrigin
public class StreamController {

  private final StreamSessionRepository streamSessionRepository;

  public StreamController(StreamSessionRepository streamSessionRepository) {
    this.streamSessionRepository = streamSessionRepository;
  }

  @GetMapping
  public List<StreamSession> list() {
    return streamSessionRepository.findAll();
  }

  @PostMapping
  public StreamSession create(@RequestBody StreamSession s) {
    return streamSessionRepository.save(s);
  }
}
