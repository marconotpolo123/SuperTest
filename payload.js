const query = `query searchAgreementWorks($workSearchInput: AgreementWorkSearchInput!) {
    searchAgreementWorks(workSearchInput: $workSearchInput) {
    total
    works {
        akas
        category
        createdDate
        duration
        hasCueSheet
        hasProduction
        isAudioAttached
        isAudioRequired
        isCisnetExclude
        isLocal
        isMechanicalDispute
        isMechanicalDivisionOfFee
        isOnAgreement
        isPerformingDispute
        isPerformingDivisionOfFee
        isRegistered
        iswc
        labls
        lastPaid
        lastPaidId
        lastPerformed
        lastPerformedId
        opusStatus
        publishers
        registeredBy
        retentionDate
        title
        trackNo
        version
        winfkey
        workStatus
        writers
        __typename
    }
    __typename
    }
  }`

const getVariables = (skip, take, ipi_ass, ipi_acq) => {
    let variables = {
      "workSearchInput": {
      "skip": skip,
      "take": take,
      "origin": "ALL_WORKS",
      "ipi": [
        ipi_ass,
        ipi_acq
      ],
      "ipiOrigin": [
      "pdof",
      "registration"
      ],
      "memberId": "813547",
      "workRelateType": "ExcludedWork",
      "sort": {
      "sortBy": "TITLE",
      "order": "asc"
      }
    }
  }
  return variables
}


module.exports = {query, getVariables}