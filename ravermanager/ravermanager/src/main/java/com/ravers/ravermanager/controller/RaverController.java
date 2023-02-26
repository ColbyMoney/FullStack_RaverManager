package com.ravers.ravermanager.controller;

import com.ravers.ravermanager.model.Raver;
import com.ravers.ravermanager.service.RaverService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/raver")
public class RaverController {
    private final RaverService raverService;

    public RaverController(RaverService raverService) {
        this.raverService = raverService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Raver>> getAllRavers() {
        List<Raver> ravers = raverService.findAllRavers();
        return new ResponseEntity<>(ravers, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Raver> getRaver(@PathVariable("id") Long id) {
        Raver raver = raverService.findRaverById(id);
        return new ResponseEntity<>(raver, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Raver> addRaver(@RequestBody Raver raver) {
        Raver newRaver = raverService.addRaver(raver);
        return new ResponseEntity<>(newRaver, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Raver> updateRaver(@RequestBody Raver raver) {
        Raver newRaver = raverService.updateRaver(raver);
        return new ResponseEntity<>(newRaver, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteRaver(@PathVariable("id") Long id) {
        raverService.deleteRaver(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
