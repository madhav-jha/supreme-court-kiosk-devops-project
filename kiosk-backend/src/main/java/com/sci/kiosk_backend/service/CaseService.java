package com.sci.kiosk_backend.service;

import com.sci.kiosk_backend.model.CaseStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class CaseService {

    private final List<CaseStatus> cases = List.of(
            new CaseStatus("CIVIL/1234/2024",
                    "ABC Pvt. Ltd.",
                    "Union of India",
                    "Pending",
                    LocalDate.now().plusDays(10),
                    "Court 1",
                    "CJI + 2 JJ"),

            new CaseStatus("CRL/5678/2023",
                    "Madhav Jha",
                    "State of X",
                    "Disposed",
                    null,
                    "Court 5",
                    "2 JJ")
    );

    public Optional<CaseStatus> getCaseByNumber(String caseNumber) {
        return cases.stream()
                .filter(c -> c.getCaseNumber().equalsIgnoreCase(caseNumber))
                .findFirst();
    }

    public List<CaseStatus> getAllCases() {
        return cases;
    }
}
