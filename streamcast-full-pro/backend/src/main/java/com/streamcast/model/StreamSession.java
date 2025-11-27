package com.streamcast.model;

import jakarta.persistence.*;
import java.time.OffsetDateTime;

@Entity
@Table(name = "stream_sessions")
public class StreamSession {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String platform; // TWITCH, YOUTUBE, KICK
  private String channelId;
  private String title;
  private boolean live;

  private OffsetDateTime startedAt;

  @ManyToOne
  @JoinColumn(name = "user_id")
  private User owner;

  public Long getId(){return id;}
  public void setId(Long id){this.id=id;}
  public String getPlatform(){return platform;}
  public void setPlatform(String p){this.platform=p;}
  public String getChannelId(){return channelId;}
  public void setChannelId(String c){this.channelId=c;}
  public String getTitle(){return title;}
  public void setTitle(String t){this.title=t;}
  public boolean isLive(){return live;}
  public void setLive(boolean l){this.live=l;}
  public OffsetDateTime getStartedAt(){return startedAt;}
  public void setStartedAt(OffsetDateTime s){this.startedAt=s;}
  public User getOwner(){return owner;}
  public void setOwner(User o){this.owner=o;}
}
