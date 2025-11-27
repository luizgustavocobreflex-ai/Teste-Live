package com.streamcast.repository;

import com.streamcast.model.WatchSession;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WatchSessionRepository extends JpaRepository<WatchSession, Long> {
}
