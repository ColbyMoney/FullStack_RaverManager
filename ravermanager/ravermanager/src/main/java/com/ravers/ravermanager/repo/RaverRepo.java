package com.ravers.ravermanager.repo;

import com.ravers.ravermanager.model.Raver;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RaverRepo extends JpaRepository<Raver, Long> {
    void deleteRaverById(Long id);

    Optional<Raver> findRaverById(Long id);
}
