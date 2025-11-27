package com.streamcast.repository;

import com.streamcast.model.StreamSession;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StreamSessionRepository extends JpaRepository<StreamSession, Long> {
}
