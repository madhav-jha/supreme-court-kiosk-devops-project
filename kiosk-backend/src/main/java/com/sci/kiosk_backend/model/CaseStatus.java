package com.sci.kiosk_backend.model;

import java.time.LocalDate;

public class CaseStatus {
    private String caseNumber;
    private String petitioner;
    private String respondent;
    private String status;          // Pending / Disposed
    private LocalDate nextHearingDate;
    private String courtNumber;
    private String bench;           // e.g., CJI + 2 JJ

    public CaseStatus() {
    }

    public CaseStatus(String caseNumber, String petitioner, String respondent,
                      String status, LocalDate nextHearingDate,
                      String courtNumber, String bench) {
        this.caseNumber = caseNumber;
        this.petitioner = petitioner;
        this.respondent = respondent;
        this.status = status;
        this.nextHearingDate = nextHearingDate;
        this.courtNumber = courtNumber;
        this.bench = bench;
    }

    public String getCaseNumber() { return caseNumber; }
    public void setCaseNumber(String caseNumber) { this.caseNumber = caseNumber; }

    public String getPetitioner() { return petitioner; }
    public void setPetitioner(String petitioner) { this.petitioner = petitioner; }

    public String getRespondent() { return respondent; }
    public void setRespondent(String respondent) { this.respondent = respondent; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public LocalDate getNextHearingDate() { return nextHearingDate; }
    public void setNextHearingDate(LocalDate nextHearingDate) { this.nextHearingDate = nextHearingDate; }

    public String getCourtNumber() { return courtNumber; }
    public void setCourtNumber(String courtNumber) { this.courtNumber = courtNumber; }

    public String getBench() { return bench; }
    public void setBench(String bench) { this.bench = bench; }
}
