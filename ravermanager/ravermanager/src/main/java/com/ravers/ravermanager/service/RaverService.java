package com.ravers.ravermanager.service;

import com.ravers.ravermanager.exception.UserNotFoundException;
import com.ravers.ravermanager.model.Raver;
import com.ravers.ravermanager.repo.RaverRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class RaverService {
    private final RaverRepo raverRepo;

    @Autowired
    public RaverService(RaverRepo raverRepo) {
        this.raverRepo = raverRepo;
    }

    public Raver addRaver(Raver raver) {
        raver.setRaverCode(UUID.randomUUID().toString());
        return raverRepo.save(raver);
    }

    public List<Raver> findAllRavers() {
        return raverRepo.findAll();
    }

    public Raver updateRaver(Raver raver) {
        return raverRepo.save(raver);
    }

    public Raver findRaverById(Long id) {
        return raverRepo.findRaverById(id)
                .orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found."));
    }

    public void deleteRaver(Long id) {
        raverRepo.deleteRaverById(id);
    }
}
