package com.sci.kiosk_backend.controller;

import com.sci.kiosk_backend.model.CaseStatus;
import com.sci.kiosk_backend.service.CaseService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class CaseController {

    private final CaseService caseService;

    public CaseController(CaseService caseService) {
        this.caseService = caseService;
    }

   @GetMapping("/cases/search")
public ResponseEntity<CaseStatus> getCaseByNumber(@RequestParam("number") String caseNumber) {
    return caseService.getCaseByNumber(caseNumber)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
}


    @GetMapping("/cases")
    public List<CaseStatus> getAllCases() {
        return caseService.getAllCases();
    }

    @GetMapping("/daily-orders")
    public List<String> getDailyOrders() {
        return List.of(
                "Order 1: Matter listed after 2 weeks",
                "Order 2: Notice issued to respondent",
                "Order 3: Interim relief granted"
        );
    }

    @GetMapping("/judgments")
    public List<String> getJudgments() {
        return List.of(
                "Judgment 1: Landmark case on Article 21",
                "Judgment 2: Important ruling on RTI",
                "Judgment 3: Constitutional bench decision"
        );
    }

    @GetMapping("/cause-list")
    public List<String> getCauseList() {
        return List.of(
                "Item 1: CIVIL/1234/2024 - Court 1",
                "Item 2: CRL/5678/2023 - Court 5",
                "Item 3: SLP/9999/2022 - Court 3"
        );
    }
}
