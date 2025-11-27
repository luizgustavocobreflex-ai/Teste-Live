package com.streamcast.model;

import jakarta.persistence.*;
import java.time.OffsetDateTime;

@Entity
@Table(name = "watch_sessions")
public class WatchSession {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  @JoinColumn(name = "viewer_id")
  private User viewer;

  @ManyToOne
  @JoinColumn(name = "stream_session_id")
  private StreamSession streamSession;

  private OffsetDateTime startedAt;
  private OffsetDateTime endedAt;

  private Integer pointsEarned = 0;

  public Long getId(){return id;}
  public void setId(Long id){this.id=id;}
  public User getViewer(){return viewer;}
  public void setViewer(User v){this.viewer=v;}
  public StreamSession getStreamSession(){return streamSession;}
  public void setStreamSession(StreamSession s){this.streamSession=s;}
  public OffsetDateTime getStartedAt(){return startedAt;}
  public void setStartedAt(OffsetDateTime s){this.startedAt=s;}
  public OffsetDateTime getEndedAt(){return endedAt;}
  public void setEndedAt(OffsetDateTime e){this.endedAt=e;}
  public Integer getPointsEarned(){return pointsEarned;}
  public void setPointsEarned(Integer p){this.pointsEarned=p;}
}
