const request = require('supertest');
const gql = require('graphql-tag')

describe('GET /users', function() {
    it('responds with json', async function() {
        const variables = {
            "workSearchInput": {
                "skip": 0,
                "take": 10,
                "origin": "ALL_WORKS",
                "ipi": [
                "00047044790",
                "00803377056"
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
        
      const response = await request("https://portal-api.aprasit.com.au")
        .post('/private')
        .set('authorization', 'eyJraWQiOiJNdFZab0FBSzNSY0RWNnI4c1hkSkh5YVdDNWYycDZkSEZDSzlEVTRJRVRVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjYzJiMDAwOC1mNTQ1LTQ1OGYtYjBjMy0zNDk2OWYwMGY5NTgiLCJhdWQiOiIxNWk5cWhxYmI2MTJiMmx1MmFvY290dDFvbiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjZkZDMzODhjLTA0NDgtNGVmYi04ZDNhLTE5NWJlYmI2OTU0MiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNzA5Njc5NDY0LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTIuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTJfT2ZQOHc3NHBHIiwiY29nbml0bzp1c2VybmFtZSI6ImNjMmIwMDA4LWY1NDUtNDU4Zi1iMGMzLTM0OTY5ZjAwZjk1OCIsImV4cCI6MTcxMDI0MzU1MCwiaWF0IjoxNzEwMjM5OTUwLCJlbWFpbCI6Im1hcmNvejEuYXByYUBnbWFpbC5jb20ifQ.C8a6GzbZWFngvZ-Xv3FSQJ3fpjrHUyA4CScew__tzb8kNFvk9S9eKKcKPgCzTDDO3pd8DheKhzytH4RubhZwg6bauswZfLnL4PdX74-OizMLZQfsEcqqnVXBfHmyB7DLBgPTGWmcJnMB2AyARAYyQQ-jwv-XL6YA_lXsSx5FH9m0e9Y-NJCUnSM3hqpBYgd3KV0VsUoPVo_KLVY7IfyFIxkSFvXT-tMT1OhHDxPuvyHsaJEdvZwmihPqjzdg-DHBXXqSCL7aJ6QMtqEzW3YDZmDJ-cyhI4oyxxZ3Pu_tygB6KW-6kQlIUzhjwKE-AKGDOlOddQiTGTuTje0Kj3omTg')
        .send({
            query: `query searchAgreementWorks($workSearchInput: AgreementWorkSearchInput!) {
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
            }`, variables
        })
      
      let jsonData = response.body.data.searchAgreementWorks.works
      for(i = 0; i < jsonData.length; i++) {
            console.log(jsonData[i]['winfkey'])
      }
    });
});