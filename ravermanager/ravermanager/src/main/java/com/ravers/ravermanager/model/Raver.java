package com.ravers.ravermanager.model;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
public class Raver implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String name;
    private String city;
    private String favDJ;
    private String phone;
    private String imageUrl;
    @Column(nullable = false, updatable = false)
    private String raverCode;

    public Raver() {
    }

    public Raver(Long id, String name, String city, String favDJ, String phone, String imageUrl, String raverCode) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.favDJ = favDJ;
        this.phone = phone;
        this.imageUrl = imageUrl;
        this.raverCode = raverCode;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getFavDJ() {
        return favDJ;
    }

    public void setFavDJ(String favDJ) {
        this.favDJ = favDJ;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getRaverCode() {
        return raverCode;
    }

    public void setRaverCode(String raverCode) {
        this.raverCode = raverCode;
    }
}
