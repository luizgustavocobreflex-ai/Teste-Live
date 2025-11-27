package com.streamcast.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "users")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank
  private String username;

  @Email
  private String email;

  private Integer points = 0;

  public Long getId(){return id;}
  public void setId(Long id){this.id=id;}
  public String getUsername(){return username;}
  public void setUsername(String u){this.username=u;}
  public String getEmail(){return email;}
  public void setEmail(String e){this.email=e;}
  public Integer getPoints(){return points;}
  public void setPoints(Integer p){this.points=p;}
}
