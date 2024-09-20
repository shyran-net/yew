window.BENCHMARK_DATA = {
  "lastUpdate": 1726831172610,
  "repoUrl": "https://github.com/yewstack/yew",
  "entries": {
    "Yew master branch benchmarks (Lower is better)": [
      {
        "commit": {
          "author": {
            "name": "WorldSEnder",
            "username": "WorldSEnder",
            "email": "WorldSEnder@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6160703c55e8bb13217879e4e05c014bac6abb69",
          "message": "Try fixing the post-comment benchmark action, take 2 (#3047)\n\n* Fix bash escaping\r\n* fix clippy issues\r\n* First checkout, then download artifacts",
          "timestamp": "2022-12-17T15:09:51Z",
          "url": "https://github.com/yewstack/yew/commit/6160703c55e8bb13217879e4e05c014bac6abb69"
        },
        "date": 1671291171623,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-vlatest-keyed 01_run1k",
            "value": "251.9535",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 02_replace1k",
            "value": "266.068",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 03_update10th1k_x16",
            "value": "718.861",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 04_select1k",
            "value": "236.3025",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 05_swap1k",
            "value": "169.4805",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 06_remove-one-1k",
            "value": "269.1675",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 07_create10k",
            "value": "3349.6935000000003",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 08_create1k-after1k_x2",
            "value": "612.2175",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 09_clear1k_x8",
            "value": "231.9895",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 21_ready-memory",
            "value": "2.101119041442871",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 22_run-memory",
            "value": "6.584461212158203",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 23_update5-memory",
            "value": "7.134069442749023",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 25_run-clear-memory",
            "value": "5.643394470214844",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 26_run-10k-memory",
            "value": "47.50889873504639",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 31_startup-ci",
            "value": "1883.005",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 33_startup-mainthreadcost",
            "value": "21.143999999999988",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 34_startup-totalbytes",
            "value": "351.7578125",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 01_run1k",
            "value": "241.1615",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 02_replace1k",
            "value": "268.9095",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 03_update10th1k_x16",
            "value": "624.1125",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 04_select1k",
            "value": "112.509",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 05_swap1k",
            "value": "133.2345",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 06_remove-one-1k",
            "value": "225.978",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 07_create10k",
            "value": "3156.0694999999996",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 08_create1k-after1k_x2",
            "value": "610.4865",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 09_clear1k_x8",
            "value": "221.876",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 21_ready-memory",
            "value": "2.109342575073242",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 22_run-memory",
            "value": "6.501262664794922",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 23_update5-memory",
            "value": "6.8795013427734375",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 25_run-clear-memory",
            "value": "5.27276611328125",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 26_run-10k-memory",
            "value": "46.15388107299805",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 31_startup-ci",
            "value": "1733.1799999999998",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 33_startup-mainthreadcost",
            "value": "13.307999999999998",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 34_startup-totalbytes",
            "value": "347.4521484375",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "WorldSEnder",
            "username": "WorldSEnder",
            "email": "WorldSEnder@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aebd22596360d5035e64e69a1c45c522588d1ce5",
          "message": "Reentrant event listeners (#3037)\n\n* add test case for reentrent event listeners\r\n* use Fn to allow reentrent event listeners",
          "timestamp": "2022-12-21T01:57:55Z",
          "url": "https://github.com/yewstack/yew/commit/aebd22596360d5035e64e69a1c45c522588d1ce5"
        },
        "date": 1671588776924,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-vlatest-keyed 01_run1k",
            "value": "147.001",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 02_replace1k",
            "value": "163.477",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 03_update10th1k_x16",
            "value": "340.7155",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 04_select1k",
            "value": "137.88150000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 05_swap1k",
            "value": "95.403",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 06_remove-one-1k",
            "value": "139.77800000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 07_create10k",
            "value": "1936.598",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 08_create1k-after1k_x2",
            "value": "354.265",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 09_clear1k_x8",
            "value": "121.469",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 21_ready-memory",
            "value": "2.1146507263183594",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 22_run-memory",
            "value": "6.867193222045898",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 23_update5-memory",
            "value": "7.133938789367676",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 25_run-clear-memory",
            "value": "5.7159423828125",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 26_run-10k-memory",
            "value": "47.44162464141846",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 31_startup-ci",
            "value": "1739.832",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 33_startup-mainthreadcost",
            "value": "16.74799999999999",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 34_startup-totalbytes",
            "value": "352.2353515625",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 01_run1k",
            "value": "153.163",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 02_replace1k",
            "value": "162.9765",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 03_update10th1k_x16",
            "value": "285.71349999999995",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 04_select1k",
            "value": "50.531000000000006",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 05_swap1k",
            "value": "76.16550000000001",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 06_remove-one-1k",
            "value": "117.197",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 07_create10k",
            "value": "1846.531",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 08_create1k-after1k_x2",
            "value": "338.5555",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 09_clear1k_x8",
            "value": "124.3445",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 21_ready-memory",
            "value": "2.1001243591308594",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 22_run-memory",
            "value": "6.748593330383301",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 23_update5-memory",
            "value": "6.8921356201171875",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 25_run-clear-memory",
            "value": "5.601091384887695",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 26_run-10k-memory",
            "value": "46.19051551818848",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 31_startup-ci",
            "value": "1738.284",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 33_startup-mainthreadcost",
            "value": "7.347999999999998",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 34_startup-totalbytes",
            "value": "347.9189453125",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jesper Olsen",
            "username": "jesper-olsen",
            "email": "43079279+jesper-olsen@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d2f35e45b2f56faf7b55c0b45a0740cacee17a24",
          "message": "remove \"Next loop\" - introduction repeating in yew.rs/docs (#3040)",
          "timestamp": "2022-12-22T20:49:50Z",
          "url": "https://github.com/yewstack/yew/commit/d2f35e45b2f56faf7b55c0b45a0740cacee17a24"
        },
        "date": 1671742439022,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-vlatest-keyed 01_run1k",
            "value": "148.5635",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 02_replace1k",
            "value": "166.983",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 03_update10th1k_x16",
            "value": "351.95550000000003",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 04_select1k",
            "value": "145.0365",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 05_swap1k",
            "value": "99.3705",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 06_remove-one-1k",
            "value": "144.8955",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 07_create10k",
            "value": "1984.707",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 08_create1k-after1k_x2",
            "value": "357.6115",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 09_clear1k_x8",
            "value": "126.0565",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 21_ready-memory",
            "value": "2.11507797241211",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 22_run-memory",
            "value": "6.894545555114746",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 23_update5-memory",
            "value": "7.114010810852051",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 25_run-clear-memory",
            "value": "5.707507133483887",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 26_run-10k-memory",
            "value": "47.51797389984131",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 31_startup-ci",
            "value": "1731.64",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 33_startup-mainthreadcost",
            "value": "9.235999999999995",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 34_startup-totalbytes",
            "value": "352.2353515625",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 01_run1k",
            "value": "153.546",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 02_replace1k",
            "value": "168.175",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 03_update10th1k_x16",
            "value": "280.724",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 04_select1k",
            "value": "52.231",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 05_swap1k",
            "value": "76.586",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 06_remove-one-1k",
            "value": "129.225",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 07_create10k",
            "value": "1912.87",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 08_create1k-after1k_x2",
            "value": "352.884",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 09_clear1k_x8",
            "value": "125.8645",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 21_ready-memory",
            "value": "2.034335136413574",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 22_run-memory",
            "value": "6.7398834228515625",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 23_update5-memory",
            "value": "6.891395568847656",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 25_run-clear-memory",
            "value": "5.179370880126953",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 26_run-10k-memory",
            "value": "46.1495885848999",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 31_startup-ci",
            "value": "1739.104",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 33_startup-mainthreadcost",
            "value": "11.383999999999997",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 34_startup-totalbytes",
            "value": "347.9189453125",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Simon",
            "username": "siku2",
            "email": "simon@siku2.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7bfba6b31c843471cec4b92dbf54b795731dab95",
          "message": "Update SVG colors (#3064)",
          "timestamp": "2022-12-28T16:09:01Z",
          "url": "https://github.com/yewstack/yew/commit/7bfba6b31c843471cec4b92dbf54b795731dab95"
        },
        "date": 1672244857961,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-vlatest-keyed 01_run1k",
            "value": "188.9685",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 02_replace1k",
            "value": "198.353",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 03_update10th1k_x16",
            "value": "580.7295",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 04_select1k",
            "value": "204.415",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 05_swap1k",
            "value": "144.324",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 06_remove-one-1k",
            "value": "218.581",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 07_create10k",
            "value": "2609.9845",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 08_create1k-after1k_x2",
            "value": "459.464",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 09_clear1k_x8",
            "value": "170.84050000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 21_ready-memory",
            "value": "1.842369079589844",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 22_run-memory",
            "value": "6.849325180053711",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 23_update5-memory",
            "value": "6.892726898193359",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 25_run-clear-memory",
            "value": "5.39849853515625",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 26_run-10k-memory",
            "value": "47.4372034072876",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 31_startup-ci",
            "value": "1741.152",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 33_startup-mainthreadcost",
            "value": "10.879999999999995",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 34_startup-totalbytes",
            "value": "352.2275390625",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 01_run1k",
            "value": "187.355",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 02_replace1k",
            "value": "201.6865",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 03_update10th1k_x16",
            "value": "466.5415",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 04_select1k",
            "value": "77.99199999999999",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 05_swap1k",
            "value": "109.9",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 06_remove-one-1k",
            "value": "175.92700000000002",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 07_create10k",
            "value": "2425.2415",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 08_create1k-after1k_x2",
            "value": "442.7355",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 09_clear1k_x8",
            "value": "172.5615",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 21_ready-memory",
            "value": "2.114553451538086",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 22_run-memory",
            "value": "6.470160484313965",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 23_update5-memory",
            "value": "6.556568145751953",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 25_run-clear-memory",
            "value": "5.519829750061035",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 26_run-10k-memory",
            "value": "46.20766639709473",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 31_startup-ci",
            "value": "1733.288",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 33_startup-mainthreadcost",
            "value": "35.87200000000002",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 34_startup-totalbytes",
            "value": "347.92578125",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Muhammad Hamza",
            "username": "hamza1311",
            "email": "muhammadhamza1311@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "38e2478d9a2b7a251f6fd068675618326d18fd5a",
          "message": "Use SVG for logo on website (#3065)",
          "timestamp": "2022-12-30T12:37:10Z",
          "url": "https://github.com/yewstack/yew/commit/38e2478d9a2b7a251f6fd068675618326d18fd5a"
        },
        "date": 1672404827062,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-vlatest-keyed 01_run1k",
            "value": "162.321",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 02_replace1k",
            "value": "180.0535",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 03_update10th1k_x16",
            "value": "440.18",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 04_select1k",
            "value": "178.608",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 05_swap1k",
            "value": "123.976",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 06_remove-one-1k",
            "value": "186.538",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 07_create10k",
            "value": "2216.9134999999997",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 08_create1k-after1k_x2",
            "value": "383.792",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 09_clear1k_x8",
            "value": "144.54500000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 21_ready-memory",
            "value": "2.032376289367676",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 22_run-memory",
            "value": "6.864995956420898",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 23_update5-memory",
            "value": "7.142358779907227",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 25_run-clear-memory",
            "value": "5.707266807556152",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 26_run-10k-memory",
            "value": "47.44162464141846",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 31_startup-ci",
            "value": "1736.104",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 33_startup-mainthreadcost",
            "value": "9.983999999999996",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 34_startup-totalbytes",
            "value": "352.232421875",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 01_run1k",
            "value": "162.01749999999998",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 02_replace1k",
            "value": "178.8175",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 03_update10th1k_x16",
            "value": "366.873",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 04_select1k",
            "value": "64.313",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 05_swap1k",
            "value": "94.5555",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 06_remove-one-1k",
            "value": "165.3025",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 07_create10k",
            "value": "2011.2315",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 08_create1k-after1k_x2",
            "value": "373.0315",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 09_clear1k_x8",
            "value": "137.2255",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 21_ready-memory",
            "value": "2.1012725830078125",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 22_run-memory",
            "value": "6.7697343826293945",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 23_update5-memory",
            "value": "6.56385612487793",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 25_run-clear-memory",
            "value": "5.605169296264648",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 26_run-10k-memory",
            "value": "46.208330154418945",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 31_startup-ci",
            "value": "1729.924",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 33_startup-mainthreadcost",
            "value": "16.436",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 34_startup-totalbytes",
            "value": "347.9228515625",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kai Salmon",
            "username": "kaisalmon",
            "email": "kaisalmon@hotmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "919695f5ef8df7a54d828295e58a85dbc5cdda52",
          "message": "The webworker in the web_worker_fib exampel is now marked as a relative path (#3057)",
          "timestamp": "2023-01-01T18:27:07Z",
          "url": "https://github.com/yewstack/yew/commit/919695f5ef8df7a54d828295e58a85dbc5cdda52"
        },
        "date": 1672598914594,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-vlatest-keyed 01_run1k",
            "value": "207.5485",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 02_replace1k",
            "value": "245.1795",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 03_update10th1k_x16",
            "value": "845.6625",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 04_select1k",
            "value": "288.275",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 05_swap1k",
            "value": "213.025",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 06_remove-one-1k",
            "value": "313.8595",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 07_create10k",
            "value": "3109.0015",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 08_create1k-after1k_x2",
            "value": "579.113",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 09_clear1k_x8",
            "value": "233.5495",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 21_ready-memory",
            "value": "2.114421844482422",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 22_run-memory",
            "value": "6.849248886108398",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 23_update5-memory",
            "value": "7.112492561340332",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 25_run-clear-memory",
            "value": "5.706183433532715",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 26_run-10k-memory",
            "value": "47.46574115753174",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 31_startup-ci",
            "value": "1895.56",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 33_startup-mainthreadcost",
            "value": "21.815999999999995",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 34_startup-totalbytes",
            "value": "352.232421875",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 01_run1k",
            "value": "224.3",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 02_replace1k",
            "value": "232.753",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 03_update10th1k_x16",
            "value": "720.568",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 04_select1k",
            "value": "119.6325",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 05_swap1k",
            "value": "156.37900000000002",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 06_remove-one-1k",
            "value": "263.702",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 07_create10k",
            "value": "2869.8805",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 08_create1k-after1k_x2",
            "value": "551.8455",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 09_clear1k_x8",
            "value": "229.2655",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 21_ready-memory",
            "value": "2.0710573196411133",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 22_run-memory",
            "value": "6.470452308654785",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 23_update5-memory",
            "value": "6.6357316970825195",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 25_run-clear-memory",
            "value": "5.21102237701416",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 26_run-10k-memory",
            "value": "46.1596155166626",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 31_startup-ci",
            "value": "1737.604",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 33_startup-mainthreadcost",
            "value": "13.619999999999996",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 34_startup-totalbytes",
            "value": "347.9228515625",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1d35148d3e95f7e5b5bcdd84e41c8148d38900cf",
          "message": "Bump prettier from 2.8.0 to 2.8.1 in /website (#3070)\n\nBumps [prettier](https://github.com/prettier/prettier) from 2.8.0 to 2.8.1.\r\n- [Release notes](https://github.com/prettier/prettier/releases)\r\n- [Changelog](https://github.com/prettier/prettier/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/prettier/prettier/compare/2.8.0...2.8.1)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: prettier\r\n  dependency-type: direct:development\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-01-04T14:25:39Z",
          "url": "https://github.com/yewstack/yew/commit/1d35148d3e95f7e5b5bcdd84e41c8148d38900cf"
        },
        "date": 1672843225787,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-vlatest-keyed 01_run1k",
            "value": "153.0405",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 02_replace1k",
            "value": "166.5575",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 03_update10th1k_x16",
            "value": "410.979",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 04_select1k",
            "value": "156.811",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 05_swap1k",
            "value": "103.8285",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 06_remove-one-1k",
            "value": "157.4885",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 07_create10k",
            "value": "1988.0585",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 08_create1k-after1k_x2",
            "value": "357.7515",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 09_clear1k_x8",
            "value": "129.2625",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 21_ready-memory",
            "value": "2.1219377517700195",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 22_run-memory",
            "value": "6.88664436340332",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 23_update5-memory",
            "value": "7.136319160461426",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 25_run-clear-memory",
            "value": "5.707278251647949",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 26_run-10k-memory",
            "value": "47.48378562927246",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 31_startup-ci",
            "value": "1731.8159999999998",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 33_startup-mainthreadcost",
            "value": "10.528",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 34_startup-totalbytes",
            "value": "352.232421875",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 01_run1k",
            "value": "151.93",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 02_replace1k",
            "value": "168.7665",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 03_update10th1k_x16",
            "value": "302.712",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 04_select1k",
            "value": "52.203",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 05_swap1k",
            "value": "78.227",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 06_remove-one-1k",
            "value": "131.4615",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 07_create10k",
            "value": "1875.495",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 08_create1k-after1k_x2",
            "value": "355.645",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 09_clear1k_x8",
            "value": "130.3225",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 21_ready-memory",
            "value": "2.12338924407959",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 22_run-memory",
            "value": "6.748276710510254",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 23_update5-memory",
            "value": "6.88995361328125",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 25_run-clear-memory",
            "value": "5.523041725158691",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 26_run-10k-memory",
            "value": "46.18849849700928",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 31_startup-ci",
            "value": "1736.756",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 33_startup-mainthreadcost",
            "value": "8.423999999999998",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 34_startup-totalbytes",
            "value": "347.9228515625",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e65ee6059989d065004f951728cc0702f68716bb",
          "message": "Bump JamesSingleton/is-organization-member from 1.0.0 to 1.0.1 (#3075)\n\nBumps [JamesSingleton/is-organization-member](https://github.com/JamesSingleton/is-organization-member) from 1.0.0 to 1.0.1.\r\n- [Release notes](https://github.com/JamesSingleton/is-organization-member/releases)\r\n- [Commits](https://github.com/JamesSingleton/is-organization-member/compare/1.0.0...1.0.1)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: JamesSingleton/is-organization-member\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-01-04T14:43:22Z",
          "url": "https://github.com/yewstack/yew/commit/e65ee6059989d065004f951728cc0702f68716bb"
        },
        "date": 1672843650124,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-vlatest-keyed 01_run1k",
            "value": "149.3785",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 02_replace1k",
            "value": "165.487",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 03_update10th1k_x16",
            "value": "373.1315",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 04_select1k",
            "value": "149.801",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 05_swap1k",
            "value": "97.4025",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 06_remove-one-1k",
            "value": "146.815",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 07_create10k",
            "value": "2011.7765",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 08_create1k-after1k_x2",
            "value": "353.394",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 09_clear1k_x8",
            "value": "128.19150000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 21_ready-memory",
            "value": "2.110507011413574",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 22_run-memory",
            "value": "6.872500419616699",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 23_update5-memory",
            "value": "7.112526893615723",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 25_run-clear-memory",
            "value": "5.771339416503906",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 26_run-10k-memory",
            "value": "47.49028778076172",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 31_startup-ci",
            "value": "1881.01",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 33_startup-mainthreadcost",
            "value": "7.672",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 34_startup-totalbytes",
            "value": "352.232421875",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 01_run1k",
            "value": "150.2395",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 02_replace1k",
            "value": "165.784",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 03_update10th1k_x16",
            "value": "270.813",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 04_select1k",
            "value": "50.659",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 05_swap1k",
            "value": "75.0625",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 06_remove-one-1k",
            "value": "125.325",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 07_create10k",
            "value": "1905.339",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 08_create1k-after1k_x2",
            "value": "347.433",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 09_clear1k_x8",
            "value": "128.8",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 21_ready-memory",
            "value": "2.102935791015625",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 22_run-memory",
            "value": "6.761440277099609",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 23_update5-memory",
            "value": "6.882205009460449",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 25_run-clear-memory",
            "value": "5.456124305725098",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 26_run-10k-memory",
            "value": "46.13158702850342",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 31_startup-ci",
            "value": "1881.13",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 33_startup-mainthreadcost",
            "value": "8.155999999999995",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 34_startup-totalbytes",
            "value": "347.9228515625",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e65ee6059989d065004f951728cc0702f68716bb",
          "message": "Bump JamesSingleton/is-organization-member from 1.0.0 to 1.0.1 (#3075)\n\nBumps [JamesSingleton/is-organization-member](https://github.com/JamesSingleton/is-organization-member) from 1.0.0 to 1.0.1.\r\n- [Release notes](https://github.com/JamesSingleton/is-organization-member/releases)\r\n- [Commits](https://github.com/JamesSingleton/is-organization-member/compare/1.0.0...1.0.1)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: JamesSingleton/is-organization-member\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-01-04T14:43:22Z",
          "url": "https://github.com/yewstack/yew/commit/e65ee6059989d065004f951728cc0702f68716bb"
        },
        "date": 1672844439583,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-vlatest-keyed 01_run1k",
            "value": "154.898",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 02_replace1k",
            "value": "172.943",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 03_update10th1k_x16",
            "value": "405.611",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 04_select1k",
            "value": "167.6695",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 05_swap1k",
            "value": "110.316",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 06_remove-one-1k",
            "value": "174.865",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 07_create10k",
            "value": "2104.2015",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 08_create1k-after1k_x2",
            "value": "385.1845",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 09_clear1k_x8",
            "value": "138.9515",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 21_ready-memory",
            "value": "2.1145057678222656",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 22_run-memory",
            "value": "6.867158889770508",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 23_update5-memory",
            "value": "7.136823654174805",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 25_run-clear-memory",
            "value": "5.769794464111328",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 26_run-10k-memory",
            "value": "47.51586055755615",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 31_startup-ci",
            "value": "1879.45",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 33_startup-mainthreadcost",
            "value": "8.279999999999998",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 34_startup-totalbytes",
            "value": "352.232421875",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 01_run1k",
            "value": "154.40449999999998",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 02_replace1k",
            "value": "172.144",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 03_update10th1k_x16",
            "value": "337.7",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 04_select1k",
            "value": "61.056",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 05_swap1k",
            "value": "91.531",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 06_remove-one-1k",
            "value": "153.369",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 07_create10k",
            "value": "1919.8245",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 08_create1k-after1k_x2",
            "value": "354.0135",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 09_clear1k_x8",
            "value": "133.0985",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 21_ready-memory",
            "value": "2.1002845764160156",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 22_run-memory",
            "value": "6.740505218505859",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 23_update5-memory",
            "value": "6.8699798583984375",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 25_run-clear-memory",
            "value": "5.519089698791504",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 26_run-10k-memory",
            "value": "46.128920555114746",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 31_startup-ci",
            "value": "1729.208",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 33_startup-mainthreadcost",
            "value": "14.416",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 34_startup-totalbytes",
            "value": "347.9228515625",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e65ee6059989d065004f951728cc0702f68716bb",
          "message": "Bump JamesSingleton/is-organization-member from 1.0.0 to 1.0.1 (#3075)\n\nBumps [JamesSingleton/is-organization-member](https://github.com/JamesSingleton/is-organization-member) from 1.0.0 to 1.0.1.\r\n- [Release notes](https://github.com/JamesSingleton/is-organization-member/releases)\r\n- [Commits](https://github.com/JamesSingleton/is-organization-member/compare/1.0.0...1.0.1)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: JamesSingleton/is-organization-member\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-01-04T14:43:22Z",
          "url": "https://github.com/yewstack/yew/commit/e65ee6059989d065004f951728cc0702f68716bb"
        },
        "date": 1672844513651,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-vlatest-keyed 01_run1k",
            "value": "165.688",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 02_replace1k",
            "value": "185.412",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 03_update10th1k_x16",
            "value": "530.2080000000001",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 04_select1k",
            "value": "198.6835",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 05_swap1k",
            "value": "135.8535",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 06_remove-one-1k",
            "value": "207.557",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 07_create10k",
            "value": "2278.793",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 08_create1k-after1k_x2",
            "value": "417.8255",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 09_clear1k_x8",
            "value": "158.346",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 21_ready-memory",
            "value": "2.1003284454345703",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 22_run-memory",
            "value": "6.866460800170898",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 23_update5-memory",
            "value": "7.137238502502441",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 25_run-clear-memory",
            "value": "5.651958465576172",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 26_run-10k-memory",
            "value": "47.51942729949951",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 31_startup-ci",
            "value": "1731.448",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 33_startup-mainthreadcost",
            "value": "17.511999999999986",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 34_startup-totalbytes",
            "value": "352.232421875",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 01_run1k",
            "value": "163.0565",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 02_replace1k",
            "value": "180.512",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 03_update10th1k_x16",
            "value": "442.576",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 04_select1k",
            "value": "80.5475",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 05_swap1k",
            "value": "109.883",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 06_remove-one-1k",
            "value": "179.595",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 07_create10k",
            "value": "2095.4725",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 08_create1k-after1k_x2",
            "value": "404.7905",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 09_clear1k_x8",
            "value": "155.31349999999998",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 21_ready-memory",
            "value": "1.8639841079711912",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 22_run-memory",
            "value": "6.524023056030273",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 23_update5-memory",
            "value": "6.657811164855957",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 25_run-clear-memory",
            "value": "5.5192461013793945",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 26_run-10k-memory",
            "value": "46.131402015686035",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 31_startup-ci",
            "value": "1882.155",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 33_startup-mainthreadcost",
            "value": "17.34399999999999",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 34_startup-totalbytes",
            "value": "347.9228515625",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Cecile Tonglet",
            "username": "cecton",
            "email": "cecile.tonglet@cecton.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d4c2f03c3d41a6ae3b3d80e3b91b509263cb68b1",
          "message": "Add method map() on Children to wrap easily (#3039)",
          "timestamp": "2023-01-05T10:30:05Z",
          "url": "https://github.com/yewstack/yew/commit/d4c2f03c3d41a6ae3b3d80e3b91b509263cb68b1"
        },
        "date": 1672915554842,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-vlatest-keyed 01_run1k",
            "value": "150.845",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 02_replace1k",
            "value": "169.50650000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 03_update10th1k_x16",
            "value": "397.745",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 04_select1k",
            "value": "155.15300000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 05_swap1k",
            "value": "103.3905",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 06_remove-one-1k",
            "value": "154.317",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 07_create10k",
            "value": "2029.535",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 08_create1k-after1k_x2",
            "value": "367.942",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 09_clear1k_x8",
            "value": "133.73950000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 21_ready-memory",
            "value": "2.10983943939209",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 22_run-memory",
            "value": "6.873064994812012",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 23_update5-memory",
            "value": "7.103273391723633",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 25_run-clear-memory",
            "value": "5.674735069274902",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 26_run-10k-memory",
            "value": "47.44144916534424",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 31_startup-ci",
            "value": "1880.625",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 33_startup-mainthreadcost",
            "value": "12.871999999999993",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 34_startup-totalbytes",
            "value": "352.232421875",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 01_run1k",
            "value": "155.586",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 02_replace1k",
            "value": "168.8065",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 03_update10th1k_x16",
            "value": "320.04049999999995",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 04_select1k",
            "value": "54.0975",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 05_swap1k",
            "value": "79.16900000000001",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 06_remove-one-1k",
            "value": "128.5045",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 07_create10k",
            "value": "1934.077",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 08_create1k-after1k_x2",
            "value": "352.9945",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 09_clear1k_x8",
            "value": "132.009",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 21_ready-memory",
            "value": "2.10208511352539",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 22_run-memory",
            "value": "6.7631378173828125",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 23_update5-memory",
            "value": "6.861632347106934",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 25_run-clear-memory",
            "value": "5.548478126525879",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 26_run-10k-memory",
            "value": "46.16257572174072",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 31_startup-ci",
            "value": "1739.1239999999998",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 33_startup-mainthreadcost",
            "value": "11.671999999999995",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 34_startup-totalbytes",
            "value": "347.9228515625",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kaede Hoshikawa",
            "username": "futursolo",
            "email": "futursolo@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b55be12d3c852a652d906b5883726f63dcc4f752",
          "message": "Prefer pop_first if it is available (#3084)",
          "timestamp": "2023-01-08T14:09:49Z",
          "url": "https://github.com/yewstack/yew/commit/b55be12d3c852a652d906b5883726f63dcc4f752"
        },
        "date": 1673188028029,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-vlatest-keyed 01_run1k",
            "value": "163.582",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 02_replace1k",
            "value": "178.5285",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 03_update10th1k_x16",
            "value": "510.687",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 04_select1k",
            "value": "188.0385",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 05_swap1k",
            "value": "127.219",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 06_remove-one-1k",
            "value": "182.8385",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 07_create10k",
            "value": "2152.652",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 08_create1k-after1k_x2",
            "value": "401.8995",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 09_clear1k_x8",
            "value": "163.8",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 21_ready-memory",
            "value": "2.1161346435546875",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 22_run-memory",
            "value": "6.887014389038086",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 23_update5-memory",
            "value": "7.13503360748291",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 25_run-clear-memory",
            "value": "5.38072395324707",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 26_run-10k-memory",
            "value": "47.51946640014648",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 31_startup-ci",
            "value": "1730.2600000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 33_startup-mainthreadcost",
            "value": "16.175999999999995",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 34_startup-totalbytes",
            "value": "351.2685546875",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 01_run1k",
            "value": "159.781",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 02_replace1k",
            "value": "174.81099999999998",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 03_update10th1k_x16",
            "value": "406.3205",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 04_select1k",
            "value": "73.6665",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 05_swap1k",
            "value": "95.885",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 06_remove-one-1k",
            "value": "165.439",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 07_create10k",
            "value": "2139.916",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 08_create1k-after1k_x2",
            "value": "384.5665",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 09_clear1k_x8",
            "value": "158.1895",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 21_ready-memory",
            "value": "2.114465713500977",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 22_run-memory",
            "value": "6.760494232177734",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 23_update5-memory",
            "value": "6.564903259277344",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 25_run-clear-memory",
            "value": "5.277327537536621",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 26_run-10k-memory",
            "value": "46.16345405578613",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 31_startup-ci",
            "value": "1882.8250000000005",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 33_startup-mainthreadcost",
            "value": "11.691999999999997",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 34_startup-totalbytes",
            "value": "346.9560546875",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "WorldSEnder",
            "username": "WorldSEnder",
            "email": "WorldSEnder@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c5ffe601f2822c5e2a4fcd08aa502c7f63775354",
          "message": "Implement an internal DomSlot for positioning instead of NodeRef (#3048)\n\nuse instead of NodeRef, decoupling the two\r\nfixes #3043\r\n\r\n* implement internal DomSlot\r\n* move DomSlot into submodule of dom_bundle\r\n* hide behind feature csr\r\n* add test cases\r\n* write get in continuation style, this saves a clone\r\n* private DomSlot::get",
          "timestamp": "2023-01-09T14:08:08Z",
          "url": "https://github.com/yewstack/yew/commit/c5ffe601f2822c5e2a4fcd08aa502c7f63775354"
        },
        "date": 1673274460541,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-vlatest-keyed 01_run1k",
            "value": "208.1795",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 02_replace1k",
            "value": "219.22250000000005",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 03_update10th1k_x16",
            "value": "473.761",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 04_select1k",
            "value": "204.3805",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 05_swap1k",
            "value": "135.697",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 06_remove-one-1k",
            "value": "216.587",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 07_create10k",
            "value": "3046.877",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 08_create1k-after1k_x2",
            "value": "565.8495",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 09_clear1k_x8",
            "value": "194.049",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 21_ready-memory",
            "value": "2.110912322998047",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 22_run-memory",
            "value": "6.753366470336914",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 23_update5-memory",
            "value": "6.847302436828613",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 25_run-clear-memory",
            "value": "5.637653350830078",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 26_run-10k-memory",
            "value": "46.467485427856445",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 31_startup-ci",
            "value": "1738",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 33_startup-mainthreadcost",
            "value": "17.847999999999995",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 34_startup-totalbytes",
            "value": "345.8447265625",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 01_run1k",
            "value": "202.5135",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 02_replace1k",
            "value": "205.888",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 03_update10th1k_x16",
            "value": "421.151",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 04_select1k",
            "value": "82.988",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 05_swap1k",
            "value": "97.9215",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 06_remove-one-1k",
            "value": "138.9545",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 07_create10k",
            "value": "2705.5275",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 08_create1k-after1k_x2",
            "value": "526.206",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 09_clear1k_x8",
            "value": "193.055",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 21_ready-memory",
            "value": "2.1113109588623047",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 22_run-memory",
            "value": "6.6337175369262695",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 23_update5-memory",
            "value": "6.591825485229492",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 25_run-clear-memory",
            "value": "5.515214920043945",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 26_run-10k-memory",
            "value": "45.24872589111328",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 31_startup-ci",
            "value": "1735.936",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 33_startup-mainthreadcost",
            "value": "13.928",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 34_startup-totalbytes",
            "value": "341.5341796875",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "WorldSEnder",
            "username": "WorldSEnder",
            "email": "WorldSEnder@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c5ffe601f2822c5e2a4fcd08aa502c7f63775354",
          "message": "Implement an internal DomSlot for positioning instead of NodeRef (#3048)\n\nuse instead of NodeRef, decoupling the two\r\nfixes #3043\r\n\r\n* implement internal DomSlot\r\n* move DomSlot into submodule of dom_bundle\r\n* hide behind feature csr\r\n* add test cases\r\n* write get in continuation style, this saves a clone\r\n* private DomSlot::get",
          "timestamp": "2023-01-09T14:08:08Z",
          "url": "https://github.com/yewstack/yew/commit/c5ffe601f2822c5e2a4fcd08aa502c7f63775354"
        },
        "date": 1673276538720,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-vlatest-keyed 01_run1k",
            "value": "153.305",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 02_replace1k",
            "value": "165.8515",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 03_update10th1k_x16",
            "value": "384.8165",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 04_select1k",
            "value": "152.2945",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 05_swap1k",
            "value": "99.016",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 06_remove-one-1k",
            "value": "149.099",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 07_create10k",
            "value": "2014.3395",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 08_create1k-after1k_x2",
            "value": "357.7195",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 09_clear1k_x8",
            "value": "129.147",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 21_ready-memory",
            "value": "2.1094703674316406",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 22_run-memory",
            "value": "6.8716583251953125",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 23_update5-memory",
            "value": "7.111719131469727",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 25_run-clear-memory",
            "value": "5.6772613525390625",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 26_run-10k-memory",
            "value": "47.46957969665527",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 31_startup-ci",
            "value": "1878.4500000000005",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 33_startup-mainthreadcost",
            "value": "17.751999999999995",
            "unit": ""
          },
          {
            "name": "yew-hooks-vlatest-keyed 34_startup-totalbytes",
            "value": "351.763671875",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 01_run1k",
            "value": "153.974",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 02_replace1k",
            "value": "170.91699999999997",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 03_update10th1k_x16",
            "value": "324.975",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 04_select1k",
            "value": "56.2325",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 05_swap1k",
            "value": "79.065",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 06_remove-one-1k",
            "value": "141.028",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 07_create10k",
            "value": "1944.438",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 08_create1k-after1k_x2",
            "value": "347.6365",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 09_clear1k_x8",
            "value": "127.073",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 21_ready-memory",
            "value": "2.1019678115844727",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 22_run-memory",
            "value": "6.737038612365723",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 23_update5-memory",
            "value": "6.865349769592285",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 25_run-clear-memory",
            "value": "5.519906997680664",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 26_run-10k-memory",
            "value": "46.12140274047851",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 31_startup-ci",
            "value": "1729.888",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 32_startup-bt",
            "value": "0",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 33_startup-mainthreadcost",
            "value": "16.411999999999995",
            "unit": ""
          },
          {
            "name": "yew-vlatest-keyed 34_startup-totalbytes",
            "value": "347.451171875",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Julius Lungys",
            "username": "voidpumpkin",
            "email": "32368314+voidpumpkin@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "48dd69cdc64ccb5ebc0eeac25aeeed1c21f950ac",
          "message": "Fix js-benchmark action (#3202)\n\n* temp\r\n\r\n* test2\r\n\r\n* test3\r\n\r\n* no ts\r\n\r\n* more\r\n\r\n* manifest\r\n\r\n* fix warning",
          "timestamp": "2023-04-01T21:23:53Z",
          "url": "https://github.com/yewstack/yew/commit/48dd69cdc64ccb5ebc0eeac25aeeed1c21f950ac"
        },
        "date": 1680385821763,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "160.8965",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "187.2715",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "556.5825",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "235.394",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "136.0435",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "181.011",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "2262.897",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "424.569",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "159.74200000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.1154747009277344",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.849200248718262",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "6.829536437988281",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.643092155456543",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "46.82933235168457",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "2045.4159999999997",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "49.16",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "319.3120000000001",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "302.9072265625",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "168.189",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "178.355",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "371.0935",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "72.2445",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "93.8735",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "142.8395",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "2143.2495",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "410.6385",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "158.23",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "1.8704185485839844",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.476163864135742",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.783080101013184",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.4572954177856445",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "45.654747009277344",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1883.725",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "48.047999999999995",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "315.22400000000005",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "299.2373046875",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a85fcde100709ba3d09066e7d15b762f086a8c57",
          "message": "Bump lipsum from 0.8.2 to 0.9.0 (#3191)\n\nBumps [lipsum](https://github.com/mgeisler/lipsum) from 0.8.2 to 0.9.0.\r\n- [Release notes](https://github.com/mgeisler/lipsum/releases)\r\n- [Commits](https://github.com/mgeisler/lipsum/compare/0.8.2...0.9.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: lipsum\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-04-01T22:19:32Z",
          "url": "https://github.com/yewstack/yew/commit/a85fcde100709ba3d09066e7d15b762f086a8c57"
        },
        "date": 1680388005825,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "170.465",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "188.4515",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "603.983",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "249.8885",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "139.85500000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "221.878",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "2310.9015",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "434.862",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "163.20049999999998",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.102869033813477",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.837899208068848",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "7.095216751098633",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.649565696716309",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "46.82681846618652",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1916.79",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "53.57199999999999",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "321.872",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "302.9072265625",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "166.529",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "187.8035",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "442.4715",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "91.723",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "108.436",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "179.0405",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "2053.809",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "423.2225",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "160.2095",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.102825164794922",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.453996658325195",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.633249282836914",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.228420257568359",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "45.63933563232422",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1881.92",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "50.07199999999999",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "324.9520000000001",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "299.2373046875",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a85fcde100709ba3d09066e7d15b762f086a8c57",
          "message": "Bump lipsum from 0.8.2 to 0.9.0 (#3191)\n\nBumps [lipsum](https://github.com/mgeisler/lipsum) from 0.8.2 to 0.9.0.\r\n- [Release notes](https://github.com/mgeisler/lipsum/releases)\r\n- [Commits](https://github.com/mgeisler/lipsum/compare/0.8.2...0.9.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: lipsum\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-04-01T22:19:32Z",
          "url": "https://github.com/yewstack/yew/commit/a85fcde100709ba3d09066e7d15b762f086a8c57"
        },
        "date": 1680388755590,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "235.6445",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "274.29",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "694.7090000000001",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "317.033",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "161.84300000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "223.46499999999995",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "3359.281",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "646.6455",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "243.2665",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.1036243438720703",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.641587257385254",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "7.095617294311523",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.6534223556518555",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "46.86964797973633",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1920.45",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "58.116",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "411.3280000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "302.9091796875",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "241.092",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "263.1245",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "476.954",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "100.8305",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "111.315",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "182.1635",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "3190.9885",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "581.894",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "217.086",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.164029121398926",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.72719669342041",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.838287353515625",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.120563507080078",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "45.67897129058838",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "2047.57",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "56.824000000000005",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "360.1520000000001",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "299.2373046875",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a85fcde100709ba3d09066e7d15b762f086a8c57",
          "message": "Bump lipsum from 0.8.2 to 0.9.0 (#3191)\n\nBumps [lipsum](https://github.com/mgeisler/lipsum) from 0.8.2 to 0.9.0.\r\n- [Release notes](https://github.com/mgeisler/lipsum/releases)\r\n- [Commits](https://github.com/mgeisler/lipsum/compare/0.8.2...0.9.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: lipsum\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-04-01T22:19:32Z",
          "url": "https://github.com/yewstack/yew/commit/a85fcde100709ba3d09066e7d15b762f086a8c57"
        },
        "date": 1680388814451,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "157.855",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "173.0125",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "432.769",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "220.7645",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "118.585",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "181.623",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "2020.7935",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "376.0545",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "135.28050000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.101957321166992",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.850436210632324",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "7.090776443481445",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.579585075378418",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "46.858835220336914",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1882.495",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "51.744",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "323.7160000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "302.9091796875",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "157.151",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "173.42399999999998",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "315.92499999999995",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "65.80799999999999",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "80.0445",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "145.0025",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "1913.279",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "368.458",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "132.0285",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.1231603622436523",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.724942207336426",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.7782392501831055",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.390934944152832",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "45.68040657043457",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1912.3350000000005",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "46.61600000000001",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "322.3120000000001",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "299.2373046875",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a85fcde100709ba3d09066e7d15b762f086a8c57",
          "message": "Bump lipsum from 0.8.2 to 0.9.0 (#3191)\n\nBumps [lipsum](https://github.com/mgeisler/lipsum) from 0.8.2 to 0.9.0.\r\n- [Release notes](https://github.com/mgeisler/lipsum/releases)\r\n- [Commits](https://github.com/mgeisler/lipsum/compare/0.8.2...0.9.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: lipsum\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-04-01T22:19:32Z",
          "url": "https://github.com/yewstack/yew/commit/a85fcde100709ba3d09066e7d15b762f086a8c57"
        },
        "date": 1680388967993,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "266.1",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "289.063",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "880.697",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "368.2725",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "216.36",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "315.0675",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "3603.777",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "680.8415",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "247.13",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "1.9126176834106443",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.847994804382324",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "6.807563781738281",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.6423139572143555",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "46.85669898986816",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1920.6849999999995",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "78.656",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "430.2960000000003",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "302.9091796875",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "262.091",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "279.697",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "681.0275",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "124.449",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "159.05849999999998",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "254.784",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "3571.5755",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "643.351",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "240.5005",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.164029121398926",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.515631675720215",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.84063720703125",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.453431129455566",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "45.680742263793945",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1907.58",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "63.58",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "459.46400000000034",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "299.2373046875",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Martin Vilcans",
            "username": "vilcans",
            "email": "martin@librador.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "86b6cb4949e5e12e48ed6a79ff14e6d280f1b220",
          "message": "todomvc example: Disallow entering empty items (#3193)\n\nIt was possible to add an empty entry by typing whitespace into the\r\ntext field. This fixes that by trimming the string *before* we check\r\nwhether it's empty.",
          "timestamp": "2023-04-02T06:57:31Z",
          "url": "https://github.com/yewstack/yew/commit/86b6cb4949e5e12e48ed6a79ff14e6d280f1b220"
        },
        "date": 1680419745102,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "182.986",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "199.41",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "509.3085",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "250.545",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "133.06099999999998",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "168.062",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "2570.522",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "473.051",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "178.86849999999998",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.164278984069824",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.640580177307129",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "7.092981338500977",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.580496788024902",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "46.82718849182129",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1916.935",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "50.53199999999999",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "311.06800000000015",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "302.9306640625",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "190.041",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "192.406",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "354.356",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "74.702",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "91.1365",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "126.336",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "2545.992",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "443.918",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "173.8225",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.1165637969970703",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.724053382873535",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.814769744873047",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.461942672729492",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "45.667503356933594",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1881.87",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "53.111999999999995",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "336.60400000000027",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "299.267578125",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Martin Vilcans",
            "username": "vilcans",
            "email": "martin@librador.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "86b6cb4949e5e12e48ed6a79ff14e6d280f1b220",
          "message": "todomvc example: Disallow entering empty items (#3193)\n\nIt was possible to add an empty entry by typing whitespace into the\r\ntext field. This fixes that by trimming the string *before* we check\r\nwhether it's empty.",
          "timestamp": "2023-04-02T06:57:31Z",
          "url": "https://github.com/yewstack/yew/commit/86b6cb4949e5e12e48ed6a79ff14e6d280f1b220"
        },
        "date": 1680419753932,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "169.6255",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "181.6925",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "548.567",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "264.317",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "141.91500000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "192.489",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "2361.8779999999997",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "409.42",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "161.281",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.111639976501465",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.841168403625488",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "7.033093452453613",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.6441450119018555",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "46.86969757080078",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1882.35",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "50.33599999999999",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "328.52800000000025",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "302.9306640625",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "171.3465",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "189.291",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "380.489",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "76.477",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "100.813",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "147.04950000000002",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "2190.139",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "397.1085",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "162.837",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.1640377044677734",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.662223815917969",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.842002868652344",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.51595401763916",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "45.68046760559082",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "2041.8979999999997",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "53.99999999999999",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "389.28800000000024",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "299.267578125",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kaede Hoshikawa",
            "username": "futursolo",
            "email": "futursolo@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9d7fafa3ffab88d4c8fab0b5a0905cb396d1860f",
          "message": "Make VList's children Rc'ed (#3050)\n\n* Make VList's children Rc'ed.\r\n\r\n* Slightly optimise for bundle size.\r\n\r\n* Revert manual cloning.\r\n\r\n* Add a benchmark.\r\n\r\n* Revert \"Revert manual cloning.\"\r\n\r\nThis reverts commit 1f737f26f85a13e49186df71eb41425387f3aa02.\r\n\r\n* Revert \"Slightly optimise for bundle size.\"\r\n\r\nThis reverts commit 71cf2a1d36f1a99463c68aae3d128aa3be93dc03.\r\n\r\n* Add size marker.\r\n\r\n* Revert \"Add size marker.\"\r\n\r\nThis reverts commit 3ca55be4ea309f516d91ecd8e2aa8256dd810d11.\r\n\r\n* Update benchmark.\r\n\r\n* Fix children_mut visibility.\r\n\r\n* Try to exclude add_child behaviour.\r\n\r\n* Fix typo.\r\n\r\n* Adjust visibility and docs.\r\n\r\n* Fix hydration with empty children.",
          "timestamp": "2023-04-02T14:51:59Z",
          "url": "https://github.com/yewstack/yew/commit/9d7fafa3ffab88d4c8fab0b5a0905cb396d1860f"
        },
        "date": 1680448434668,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "232.1045",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "258.9035",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "713.8855000000001",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "327.525",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "170.83749999999998",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "259.4945",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "3373.428",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "616.717",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "215.5205",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.109281539916992",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.781790733337402",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "6.805858612060547",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.453805923461914",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "46.639360427856445",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1882.105",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "61.987999999999985",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "457.98",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "305.3486328125",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "228.312",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "250.963",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "504.8490000000001",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "97.105",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "120.548",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "183.985",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "2952.6645",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "622.143",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "218.182",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.110947608947754",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.430422782897949",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.841144561767578",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.5151872634887695",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "45.43055057525635",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1733.056",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "68.548",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "418.4279999999997",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "301.591796875",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kaede Hoshikawa",
            "username": "futursolo",
            "email": "futursolo@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "36aaecc430ca0b5ecaf3674ecd18f56d62f8acab",
          "message": "Update Dependencies with Breaking Changes (#3204)\n\n* Update axum.\r\n\r\n* Update base64.\r\n\r\n* Update NPM Dependencies.\r\n\r\n* Update Translations.\r\n\r\n* Make sure all docusaurus dependencies are with the same version.",
          "timestamp": "2023-04-02T15:16:33Z",
          "url": "https://github.com/yewstack/yew/commit/36aaecc430ca0b5ecaf3674ecd18f56d62f8acab"
        },
        "date": 1680449604884,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "153.5605",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "168.2015",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "424.8405",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "206.558",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "114.99",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "158.913",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "2017.093",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "367.826",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "128.4785",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "1.8533973693847656",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.724618911743164",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "6.833595275878906",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.644451141357422",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "46.679443359375",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1880.64",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "50.348",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "290.404",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "305.3486328125",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "153.59",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "168.551",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "294.19",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "57.4315",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "76.78399999999999",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "120.411",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "1895.2855",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "351.3805",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "128.19549999999998",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.1010589599609375",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.685181617736816",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.842746734619141",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.494107246398926",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "45.38946914672851",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1883.575",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "52.32399999999999",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "321.1520000000001",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "301.591796875",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Greg Johnston",
            "username": "gbj",
            "email": "greg.johnston@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "bdf5712d969b27fdb122a5da0c5384f5a7d06f04",
          "message": "Incremental performance improvements to element creation (#3169)\n\n* enable interning\r\n\r\n* intern tag names\r\n\r\n* intern attribute keys and event listener types\r\n\r\n* intern attribute values\r\n\r\n* cache and clone elements\r\n\r\n* clean up the node cloning version a bit\r\n\r\n* use HashMap instead of Vec for element cache\r\n\r\n* Revert \"intern attribute values\"\r\n\r\nThis reverts commit 28653c4660dcf1942fab3b0ad7d4c840b96e0f2a.\r\n\r\n* add `enable-interning` feature to Yew that activates the same in wasm-bindgen\r\n\r\n* remove interning feature",
          "timestamp": "2023-04-02T19:29:21Z",
          "url": "https://github.com/yewstack/yew/commit/bdf5712d969b27fdb122a5da0c5384f5a7d06f04"
        },
        "date": 1680465173851,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "168.0695",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "174.74900000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "519.0395",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "237.97",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "136.6145",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "181.0875",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "2104.803",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "390.5415",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "152.9065",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.1080589294433594",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.727455139160156",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "7.034625053405762",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.641870498657227",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "46.64723587036133",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1881.2",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "56.308",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "304.06400000000014",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "307.833984375",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "152.09199999999998",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "170.00099999999998",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "387.2845",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "70.4515",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "90.7885",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "142.02249999999998",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "2080.5735",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "365.818",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "150.832",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.1072864532470703",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.666869163513184",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.7856645584106445",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.518580436706543",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "45.39256858825683",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1921.28",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "55.32000000000001",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "309.30400000000014",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "304.0791015625",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Greg Johnston",
            "username": "gbj",
            "email": "greg.johnston@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "bdf5712d969b27fdb122a5da0c5384f5a7d06f04",
          "message": "Incremental performance improvements to element creation (#3169)\n\n* enable interning\r\n\r\n* intern tag names\r\n\r\n* intern attribute keys and event listener types\r\n\r\n* intern attribute values\r\n\r\n* cache and clone elements\r\n\r\n* clean up the node cloning version a bit\r\n\r\n* use HashMap instead of Vec for element cache\r\n\r\n* Revert \"intern attribute values\"\r\n\r\nThis reverts commit 28653c4660dcf1942fab3b0ad7d4c840b96e0f2a.\r\n\r\n* add `enable-interning` feature to Yew that activates the same in wasm-bindgen\r\n\r\n* remove interning feature",
          "timestamp": "2023-04-02T19:29:21Z",
          "url": "https://github.com/yewstack/yew/commit/bdf5712d969b27fdb122a5da0c5384f5a7d06f04"
        },
        "date": 1680465211596,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "258.77750000000003",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "296.8905",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "854.4315",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "356.48900000000003",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "198.8225",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "289.7685",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "3497.4395",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "656.235",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "245.6945",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.104269027709961",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.760345458984375",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "7.039640426635742",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.705405235290527",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "46.67780590057373",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1885.44",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "69.36000000000001",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "483.24800000000016",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "305.3486328125",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "252.1885",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "275.7315",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "605.7950000000001",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "109.1895",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "122.988",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "208.3885",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "3306.0795",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "620.2735",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "219.871",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.115320205688477",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.65981388092041",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.842761993408203",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.342329025268555",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "45.593509674072266",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1883.58",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "68.22399999999999",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "432.75600000000014",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "301.591796875",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arniu Tseng",
            "username": "arniu",
            "email": "arniu2006@163.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6f4cdf2802105e8473e52d7bbd4188a5785f2e74",
          "message": "Pass hook dependencies as the first function argument (#2861)\n\n* Add use_effect_with\r\n\r\n* Fix doc\r\n\r\n* Add NeverEq\r\n\r\n* Save as deps-and-runner\r\n\r\n* remove with_deps\r\n\r\n* fix other use_effect_with_deps\r\n\r\n* add migration guide\r\n\r\n* fix website\r\n\r\n* fix doc test\r\n\r\n* return use_effect_base\r\n\r\n* fix docs\r\n\r\n* fmt\r\n\r\n* fix doc tests\r\n\r\n* noeq\r\n\r\n* use_callback\r\n\r\n* finsihing touches\r\n\r\n* fmt\r\n\r\n* nighly fmt\r\n\r\n* fix mistake\r\n\r\n---------\r\n\r\nCo-authored-by: Julius Lungys <32368314+voidpumpkin@users.noreply.github.com>",
          "timestamp": "2023-04-03T16:15:11Z",
          "url": "https://github.com/yewstack/yew/commit/6f4cdf2802105e8473e52d7bbd4188a5785f2e74"
        },
        "date": 1680539796498,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "229.704",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "251.443",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "717.3655",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "335.1625",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "171.662",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "253.348",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "3190.032",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "598.6385",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "233.1965",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.121591567993164",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.763465881347656",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "7.094512939453125",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.713696479797363",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "46.66765213012695",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1883.805",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "69.24799999999999",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "391.7720000000003",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "307.833984375",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "234.7945",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "248.1335",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "558.0409999999999",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "102.4495",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "118.9525",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "187.751",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "3064.613",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "583.808",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "226.6465",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.109304428100586",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.433690071105957",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.844871520996094",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.5616254806518555",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "45.43272399902344",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1880.945",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "69.19599999999998",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "426.9080000000002",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "304.0791015625",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kaede Hoshikawa",
            "username": "futursolo",
            "email": "futursolo@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7178d2ea3d3a12e08189c7e97fb2e2292e32270a",
          "message": "Approve maintainer pull requests when a pull request is ready for review. (#3208)",
          "timestamp": "2023-04-03T16:56:03Z",
          "url": "https://github.com/yewstack/yew/commit/7178d2ea3d3a12e08189c7e97fb2e2292e32270a"
        },
        "date": 1680541668200,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "206.5535",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "227.12",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "619.238",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "283.17949999999996",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "148.1085",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "195.687",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "2880.2185",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "526.5115000000001",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "202.116",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.1688127517700195",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.787175178527832",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "6.805161476135254",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.652982711791992",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "46.67119598388672",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1732.36",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "60.684",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "362.4400000000001",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "307.833984375",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "209.753",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "223.0815",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "432.3855",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "81.733",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "96.9895",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "149.4505",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "2626.5025",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "512.836",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "194.949",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.1075305938720703",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.685179710388184",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.556907653808594",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.458705902099609",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "45.42055702209473",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "2049.086",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "54.02399999999999",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "373.116",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "304.0791015625",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kaede Hoshikawa",
            "username": "futursolo",
            "email": "futursolo@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7178d2ea3d3a12e08189c7e97fb2e2292e32270a",
          "message": "Approve maintainer pull requests when a pull request is ready for review. (#3208)",
          "timestamp": "2023-04-03T16:56:03Z",
          "url": "https://github.com/yewstack/yew/commit/7178d2ea3d3a12e08189c7e97fb2e2292e32270a"
        },
        "date": 1680541901676,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "212.343",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "235.6995",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "691.7315",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "310.218",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "157.44",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "222.224",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "2923.303",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "538.2725",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "215.2245",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.1079750061035156",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.543850898742676",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "6.820690155029297",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.714776039123535",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "46.64809608459473",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1904.8",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "72.05999999999999",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "393.0200000000001",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "307.833984375",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "214.073",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "226.0965",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "543.364",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "89.2565",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "109.4195",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "170.3",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "2849.6854999999996",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "557.845",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "221.3075",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.121002197265625",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.602006912231445",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.636016845703125",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.393798828125",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "45.40483474731445",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1927.275",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "62.315999999999995",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "419.6120000000003",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "304.0791015625",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kaede Hoshikawa",
            "username": "futursolo",
            "email": "futursolo@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7178d2ea3d3a12e08189c7e97fb2e2292e32270a",
          "message": "Approve maintainer pull requests when a pull request is ready for review. (#3208)",
          "timestamp": "2023-04-03T16:56:03Z",
          "url": "https://github.com/yewstack/yew/commit/7178d2ea3d3a12e08189c7e97fb2e2292e32270a"
        },
        "date": 1680542234686,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "188.5605",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "213.081",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "706.4195",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "278.1055",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "166.4645",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "224.2235",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "2527.004",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "484.54",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "189.766",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.1689233779907227",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.735936164855957",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "7.117637634277344",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.64517879486084",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "46.64282989501953",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1912.375",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "71.744",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "375.0080000000001",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "307.833984375",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "185.6765",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "206.2075",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "492.5685",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "89.74",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "107.533",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "187.956",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "2444.2905",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "460.9065",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "177.562",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.1688718795776367",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.666277885437012",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.581535339355469",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.268247604370117",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "45.43423080444336",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1884.245",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "54.836",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "344.7840000000001",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "304.0791015625",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kaede Hoshikawa",
            "username": "futursolo",
            "email": "futursolo@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "934aedbc8815fd77fc6630b644cfea4f9a071236",
          "message": "Enable PartialEq for all virtual dom types (#3206)\n\n* Enable PartialEq for VComp.\r\n\r\n* Fix VList's children PartialEq.\r\n\r\n* Update use context test.",
          "timestamp": "2023-04-04T00:54:29Z",
          "url": "https://github.com/yewstack/yew/commit/934aedbc8815fd77fc6630b644cfea4f9a071236"
        },
        "date": 1680571032577,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "250.9985",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "280.1495",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "835.5364999999999",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "355.79449999999997",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "195.139",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "282.1115",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "3242.24",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "613.8475000000001",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "220.8385",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "1.8702163696289065",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.557616233825684",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "7.095176696777344",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.644433975219727",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "46.91974258422851",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1926.085",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "70.112",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "465.2200000000003",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "308.181640625",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "245.3425",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "280.9255",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "571.703",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "116.1655",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "136.8455",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "234.8285",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "3237.7675",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "613.802",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "220.4195",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "1.8572959899902344",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.661871910095215",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.5860490798950195",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.520739555358887",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "45.39191246032715",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1892.61",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "63.484",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "414.6960000000002",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "304.4326171875",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kevin Menard",
            "username": "nirvdrum",
            "email": "kevin@nirvdrum.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0f3915677d26d6ffa3efd3da55aea3fbc9161959",
          "message": "Update documentation.md (#3210)\n\nFix a typo in the issue template.",
          "timestamp": "2023-04-04T17:55:54Z",
          "url": "https://github.com/yewstack/yew/commit/0f3915677d26d6ffa3efd3da55aea3fbc9161959"
        },
        "date": 1680632156664,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "182.532",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "204.027",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "645.2819999999999",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "302.4955",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "166.942",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "234.5555",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "2536.089",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "476.2455",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "188.074",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.2128171920776367",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.521549224853516",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "6.810232162475586",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.713784217834473",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "46.67176055908203",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1835.052",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "58.792",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "319.58800000000014",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "308.181640625",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "190.4325",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "206.8115",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "480.3735",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "97.5725",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "119.7225",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "182.063",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "2447.273",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "459.6075",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "182.1945",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.1074161529541016",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.605058670043945",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.785042762756348",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.534461975097656",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "45.43075180053711",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1911.97",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "58.14399999999999",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "382.60000000000014",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "304.4326171875",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Julius Lungys",
            "username": "voidpumpkin",
            "email": "32368314+voidpumpkin@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f59c744efb71ecf72db1847ee016f5ef0e1cc268",
          "message": "Fix function_memory_game (#3215)",
          "timestamp": "2023-04-04T19:23:45Z",
          "url": "https://github.com/yewstack/yew/commit/f59c744efb71ecf72db1847ee016f5ef0e1cc268"
        },
        "date": 1680637585124,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "251.8975",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "276.2445",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "856.848",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "354.591",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "191.095",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "271.3945",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "3497.5985",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "647.904",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "243.9775",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.1077651977539062",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.798979759216309",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "7.096126556396484",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.70790958404541",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "46.67690086364746",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1912.81",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "62.091999999999985",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "434.3160000000004",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "308.181640625",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "239.1065",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "254.04199999999997",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "615.6785",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "102.887",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "136.655",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "254.65500000000003",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "3164.676",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "599.812",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "232.619",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.1216773986816406",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.464835166931152",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.5861101150512695",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.519381523132324",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "45.39475440979004",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1943.775",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "80.59199999999998",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "495.80000000000064",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "304.4326171875",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Julius Lungys",
            "username": "voidpumpkin",
            "email": "32368314+voidpumpkin@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "24d79e840a904e0d2c0fc79967608354023a3e82",
          "message": "Add webkitdirectory to the boolean attributes list (#3214)\n\n* Implement bool IntoPropValue String & AttrValue\r\n\r\n* Revert \"Implement bool IntoPropValue String & AttrValue\"\r\n\r\nThis reverts commit 8468e7a3d9d5d55fc6e1360e49bb2be9f3772376.\r\n\r\n* Add webkitdirectory to the boolean attributes list",
          "timestamp": "2023-04-05T18:40:12Z",
          "url": "https://github.com/yewstack/yew/commit/24d79e840a904e0d2c0fc79967608354023a3e82"
        },
        "date": 1680720986804,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "149.31400000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "167.477",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "450.2875",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "217.161",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "118.0015",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "161.0325",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "1878.36",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "369.289",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "134.34699999999998",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.129611015319824",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.787320137023926",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "6.809072494506836",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.5083818435668945",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "46.64188003540039",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1906.01",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "51.024",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "318.1680000000004",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "308.181640625",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "149.151",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "164.5985",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "314.397",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "56.5255",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "79.46000000000001",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "130.0435",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "1802.927",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "350.06",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "129.0375",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.1226587295532227",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.600683212280273",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.841958999633789",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.394038200378418",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "45.390981674194336",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1883.03",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "47.276",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "299.26",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "304.4326171875",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Julius Lungys",
            "username": "voidpumpkin",
            "email": "32368314+voidpumpkin@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "24d79e840a904e0d2c0fc79967608354023a3e82",
          "message": "Add webkitdirectory to the boolean attributes list (#3214)\n\n* Implement bool IntoPropValue String & AttrValue\r\n\r\n* Revert \"Implement bool IntoPropValue String & AttrValue\"\r\n\r\nThis reverts commit 8468e7a3d9d5d55fc6e1360e49bb2be9f3772376.\r\n\r\n* Add webkitdirectory to the boolean attributes list",
          "timestamp": "2023-04-05T18:40:12Z",
          "url": "https://github.com/yewstack/yew/commit/24d79e840a904e0d2c0fc79967608354023a3e82"
        },
        "date": 1680721303237,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "212.9745",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "252.5375",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "758.11",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "339.37300000000005",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "176.1025",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "259.4135",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "3108.731",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "585.15",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "226.053",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.1689577102661133",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.580649375915527",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "6.808969497680664",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.760220527648926",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "46.66789150238037",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1887.595",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "63.639999999999986",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "369.85600000000017",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "308.181640625",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "229.0585",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "262.6915",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "584.7235000000001",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "86.963",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "110.652",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "211.0885",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "3206.9120000000003",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "573.4795",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "207.3835",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.12906551361084",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.653080940246582",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.865934371948242",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.522337913513184",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "45.431541442871094",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1866.93",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "66.57999999999998",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "420.1320000000003",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "304.4326171875",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1e5ed69414d216a2b540abe2fbc416ce4fd58ee0",
          "message": "Bump serde_json from 1.0.94 to 1.0.95 (#3220)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.94 to 1.0.95.\r\n- [Release notes](https://github.com/serde-rs/json/releases)\r\n- [Commits](https://github.com/serde-rs/json/compare/v1.0.94...v1.0.95)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: serde_json\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-04-10T08:41:55Z",
          "url": "https://github.com/yewstack/yew/commit/1e5ed69414d216a2b540abe2fbc416ce4fd58ee0"
        },
        "date": 1681117379550,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "148.55849999999998",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "167.2865",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "478.285",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "217.2645",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "122.357",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "171.773",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "1960.2855",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "374.2545",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "134.8215",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.122152328491211",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.7259063720703125",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "7.042407989501953",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.646672248840332",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "46.68130683898926",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1882.765",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "52.892",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "327.9200000000001",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "308.181640625",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "152.226",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "164.983",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "314.791",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "59.9965",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "81.072",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "127.2845",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "1908.6895",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "347.519",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "133.88549999999998",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.1265602111816406",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.662657737731934",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.791933059692383",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.5257062911987305",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "45.3957633972168",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1909.095",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "53.41599999999999",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "308.3000000000001",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "304.4326171875",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1e5ed69414d216a2b540abe2fbc416ce4fd58ee0",
          "message": "Bump serde_json from 1.0.94 to 1.0.95 (#3220)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.94 to 1.0.95.\r\n- [Release notes](https://github.com/serde-rs/json/releases)\r\n- [Commits](https://github.com/serde-rs/json/compare/v1.0.94...v1.0.95)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: serde_json\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-04-10T08:41:55Z",
          "url": "https://github.com/yewstack/yew/commit/1e5ed69414d216a2b540abe2fbc416ce4fd58ee0"
        },
        "date": 1681117504069,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "218.895",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "249.325",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "778.9075",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "320.8485",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "169.32999999999998",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "249.5315",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "3087.1710000000003",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "569.3979999999999",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "234.1035",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.107830047607422",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.811718940734863",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "6.810541152954102",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.656923294067383",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "46.64147186279297",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1882.24",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "65.308",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "405.3200000000001",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "307.2734375",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "217.4785",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "241.8395",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "561.3665",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "108.4855",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "119.14",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "206.9405",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "2856.4539999999997",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "568.6185",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "227.8815",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.1158361434936523",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.661444664001465",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.841817855834961",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.526442527770996",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "45.432464599609375",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1881.805",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "66.932",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "392.1800000000004",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "303.525390625",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1e5ed69414d216a2b540abe2fbc416ce4fd58ee0",
          "message": "Bump serde_json from 1.0.94 to 1.0.95 (#3220)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.94 to 1.0.95.\r\n- [Release notes](https://github.com/serde-rs/json/releases)\r\n- [Commits](https://github.com/serde-rs/json/compare/v1.0.94...v1.0.95)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: serde_json\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-04-10T08:41:55Z",
          "url": "https://github.com/yewstack/yew/commit/1e5ed69414d216a2b540abe2fbc416ce4fd58ee0"
        },
        "date": 1681117811636,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "154.46749999999997",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "173.93099999999998",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "508.2045",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "229.252",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "132.65800000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "186.1645",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "1925.68",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "381.741",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "140.9855",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.120176315307617",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.788437843322754",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "7.033102989196777",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.714024543762207",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "46.68528175354004",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1889.565",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "49.816",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "343.2720000000001",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "307.2744140625",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "155.042",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "172.359",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "363.221",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "69.94200000000001",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "97.9105",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "147.892",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "1881.7705",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "365.31",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "134.6035",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.11514949798584",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.603971481323242",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.7810821533203125",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.520869255065918",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "45.43033981323242",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "2042.944",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "50.03199999999999",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "340.44800000000004",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "303.525390625",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "998db3db4463d34b971dfead0e0b5eda2ef68f02",
          "message": "Bump git2 from 0.16.1 to 0.17.0 (#3236)\n\nBumps [git2](https://github.com/rust-lang/git2-rs) from 0.16.1 to 0.17.0.\r\n- [Release notes](https://github.com/rust-lang/git2-rs/releases)\r\n- [Changelog](https://github.com/rust-lang/git2-rs/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/rust-lang/git2-rs/compare/0.16.1...git2-curl-0.17.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: git2\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-04-14T06:12:59Z",
          "url": "https://github.com/yewstack/yew/commit/998db3db4463d34b971dfead0e0b5eda2ef68f02"
        },
        "date": 1681453500047,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "149.22899999999998",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "165.336",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "447.7505",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "213.6315",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "118.1655",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "168.849",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "1954.817",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "367.3045",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "126.111",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.123006820678711",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.641205787658691",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "7.1399993896484375",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.483105659484863",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "47.63409423828125",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1907.695",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "47.268",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "291.84000000000015",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "307.2744140625",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "147.17649999999998",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "162.6755",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "327.09450000000004",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "58.405",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "79.23400000000001",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "120.5055",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "1910.65",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "342.027",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "124.1325",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.0678939819335938",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.766036033630371",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.889265060424805",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.531536102294922",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "46.41092872619629",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1879.4600000000005",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "62.260000000000005",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "339.05600000000015",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "303.5234375",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "998db3db4463d34b971dfead0e0b5eda2ef68f02",
          "message": "Bump git2 from 0.16.1 to 0.17.0 (#3236)\n\nBumps [git2](https://github.com/rust-lang/git2-rs) from 0.16.1 to 0.17.0.\r\n- [Release notes](https://github.com/rust-lang/git2-rs/releases)\r\n- [Changelog](https://github.com/rust-lang/git2-rs/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/rust-lang/git2-rs/compare/0.16.1...git2-curl-0.17.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: git2\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-04-14T06:12:59Z",
          "url": "https://github.com/yewstack/yew/commit/998db3db4463d34b971dfead0e0b5eda2ef68f02"
        },
        "date": 1681454048317,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "150.238",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "167.1665",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "466.806",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "222.2685",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "125.297",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "171.46800000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "1938.8735",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "368.4275",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "130.833",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.105907440185547",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.8249969482421875",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "7.217761993408203",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.70894718170166",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "47.6328239440918",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1879.705",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "47.39600000000001",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "343.4440000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "307.2744140625",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "151.8155",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "166.379",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "337.2435",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "63.346500000000006",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "84.298",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "141.15449999999998",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "1846.8825",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "351.415",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "125.977",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.171065330505371",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.701044082641602",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.943243026733398",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.268816947937012",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "46.383832931518555",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1880.265",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "48.67599999999999",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "285.5680000000002",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "303.5234375",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "998db3db4463d34b971dfead0e0b5eda2ef68f02",
          "message": "Bump git2 from 0.16.1 to 0.17.0 (#3236)\n\nBumps [git2](https://github.com/rust-lang/git2-rs) from 0.16.1 to 0.17.0.\r\n- [Release notes](https://github.com/rust-lang/git2-rs/releases)\r\n- [Changelog](https://github.com/rust-lang/git2-rs/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/rust-lang/git2-rs/compare/0.16.1...git2-curl-0.17.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: git2\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-04-14T06:12:59Z",
          "url": "https://github.com/yewstack/yew/commit/998db3db4463d34b971dfead0e0b5eda2ef68f02"
        },
        "date": 1681454070187,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "162.146",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "183.825",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "656.0835",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "272.687",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "153.62900000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "212.0785",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "2191.8305",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "422.2125",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "170.799",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.1300153732299805",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.8856401443481445",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "7.217674255371094",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.627801895141602",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "47.63438415527344",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1892.21",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "47.964",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "322.78000000000026",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "307.2744140625",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "159.072",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "179.201",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "470.796",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "89.971",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "112.411",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "182.111",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "2199.3644999999997",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "409.2855",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "170.308",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.1159772872924805",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.7620954513549805",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.936428070068359",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.529417991638184",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "46.390987396240234",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1754.576",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "50.4",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "356.7000000000002",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "303.5234375",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Dillen Meijboom",
            "username": "dmeijboom",
            "email": "github@dillen.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d0205a8ea3c9061fee2b1044ed107d1c98e811a6",
          "message": "feat: implement hydration for vraw (#3245)",
          "timestamp": "2023-04-25T21:48:04Z",
          "url": "https://github.com/yewstack/yew/commit/d0205a8ea3c9061fee2b1044ed107d1c98e811a6"
        },
        "date": 1682460354984,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "159.5075",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "176.47899999999998",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "588.702",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "244.19",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "157.27100000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "216.4545",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "2164.83",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "402.3375",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "158.4755",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.1159563064575195",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.836667060852051",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "7.135401725769043",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.718839645385742",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "47.66305732727051",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1915.75",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "47.27599999999999",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "279.9400000000001",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "304.359375",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "163.285",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "182.2495",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "480.835",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "94.208",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "121.2635",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "191.6715",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "2077.902",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "394.8725",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "155.748",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.1273508071899414",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.782240867614746",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.942163467407227",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.5210676193237305",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "46.41311836242676",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1880.715",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "51.16",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "322.36400000000015",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "300.73828125",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kaede Hoshikawa",
            "username": "futursolo",
            "email": "futursolo@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dbe671e8c4112f11c5f57bf16fc9569db55be047",
          "message": "Fix clippy for Rust 1.69 (#3246)\n\n* Fix clippy for Rust 1.69.\r\n\r\n* use std::marker::PhantonData.\r\n\r\n* Change callee to caller.",
          "timestamp": "2023-04-28T18:32:11Z",
          "url": "https://github.com/yewstack/yew/commit/dbe671e8c4112f11c5f57bf16fc9569db55be047"
        },
        "date": 1682707846191,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "158.392",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "186.3205",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "638.7429999999999",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "261.2205",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "145.85000000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "219.3155",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "2252.4525000000003",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "417.481",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "165.063",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "1.8692626953125",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.835720062255859",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "7.204315185546875",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.715851783752441",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "47.63369274139404",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1730.152",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "51.86399999999999",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "295.72000000000014",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "304.359375",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "161.282",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "177.6285",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "479.6255",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "94.8225",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "127.4375",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "171.2785",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "2102.255",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "400.3665",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "167.711",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.12704086303711",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.768942832946777",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.949792861938477",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.5200090408325195",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "46.44331645965576",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1911.065",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "46.79599999999999",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "294.27600000000007",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "300.73828125",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3394f35a8dd151ee22513e36b2398aaae3499b46",
          "message": "Bump serde_json from 1.0.95 to 1.0.96 (#3241)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.95 to 1.0.96.\r\n- [Release notes](https://github.com/serde-rs/json/releases)\r\n- [Commits](https://github.com/serde-rs/json/compare/v1.0.95...v1.0.96)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: serde_json\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-04-29T07:48:56Z",
          "url": "https://github.com/yewstack/yew/commit/3394f35a8dd151ee22513e36b2398aaae3499b46"
        },
        "date": 1682755562421,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "155.583",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "172.952",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "573.0565",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "233.018",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "135.39",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "179.9095",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "2250.1955",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "402.01",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "166.5455",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.126699447631836",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.905108451843262",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "7.201755523681641",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.719738960266113",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "47.85362434387207",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1880.265",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "55.92400000000001",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "325.1000000000003",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "304.359375",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "153.5605",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "169.116",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "388.415",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "76.90950000000001",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "97.842",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "154.47899999999998",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "2013.746",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "386.923",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "157.395",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.1144466400146484",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.7685956954956055",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.948118209838867",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.527770042419434",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "46.3877067565918",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1878.965",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "46.379999999999995",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "336.66000000000014",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "300.73828125",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3394f35a8dd151ee22513e36b2398aaae3499b46",
          "message": "Bump serde_json from 1.0.95 to 1.0.96 (#3241)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.95 to 1.0.96.\r\n- [Release notes](https://github.com/serde-rs/json/releases)\r\n- [Commits](https://github.com/serde-rs/json/compare/v1.0.95...v1.0.96)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: serde_json\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-04-29T07:48:56Z",
          "url": "https://github.com/yewstack/yew/commit/3394f35a8dd151ee22513e36b2398aaae3499b46"
        },
        "date": 1682755563003,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "152.7855",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "176.18099999999998",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "570.77",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "242.8005",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "145.091",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "189.5755",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "2169.75",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "410.7965",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "166.97449999999998",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.116485595703125",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.896763801574707",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "7.224292755126953",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.724306106567383",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "47.63523483276367",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1735.196",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "47.996",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "330.48400000000004",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "304.9921875",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "152.9375",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "171.6995",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "431.2515",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "76.5265",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "105.388",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "149.3265",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "1997.736",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "386.0915",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "161.193",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.1348695755004883",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.767485618591309",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.9603118896484375",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.587933540344238",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "46.693620681762695",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1885.245",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "51.616",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "306.17600000000004",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "301.3818359375",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3394f35a8dd151ee22513e36b2398aaae3499b46",
          "message": "Bump serde_json from 1.0.95 to 1.0.96 (#3241)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.95 to 1.0.96.\r\n- [Release notes](https://github.com/serde-rs/json/releases)\r\n- [Commits](https://github.com/serde-rs/json/compare/v1.0.95...v1.0.96)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: serde_json\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-04-29T07:48:56Z",
          "url": "https://github.com/yewstack/yew/commit/3394f35a8dd151ee22513e36b2398aaae3499b46"
        },
        "date": 1682755814308,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "151.1585",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "169.62900000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "489.6415",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "223.323",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "129.5795",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "174.197",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "2064.7095",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "384.94000000000005",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "152.0685",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "1.869281768798828",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.632411003112793",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "7.202579498291016",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.70542049407959",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "47.67007160186768",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1883.07",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "44.623999999999995",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "302.33200000000016",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "304.4130859375",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "151.7005",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "167.481",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "362.5355",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "67.693",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "90.4875",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "137.7775",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "1943.878",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "360.03549999999996",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "146.3125",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.1214208602905273",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.758225440979004",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.949895858764648",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.527499198913574",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "46.61573219299317",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1886.42",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "47.76",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "323.22000000000025",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "300.791015625",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kaede Hoshikawa",
            "username": "futursolo",
            "email": "futursolo@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9cebb09b584856672978c21583002591c170e9b7",
          "message": "Update dependencies. (#3253)",
          "timestamp": "2023-04-30T15:42:43Z",
          "url": "https://github.com/yewstack/yew/commit/9cebb09b584856672978c21583002591c170e9b7"
        },
        "date": 1682870325659,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "145.423",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "163.2545",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "412.1355",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "201.3675",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "112.1805",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "154.8075",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "1853.901",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "356.67949999999996",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "126.2395",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.114765167236328",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.895232200622559",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "7.146526336669922",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.655823707580566",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "47.83921813964844",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1879.475",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "48.408",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "310.1680000000001",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "305.2412109375",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "145.3915",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "160.81900000000002",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "291.621",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "53.3945",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "76.5235",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "118.725",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "1827.6785",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "335.953",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "121.3015",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.1337709426879883",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.768801689147949",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.948423385620117",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.5320234298706055",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "46.38265419006348",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1919.295",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "45.087999999999994",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "280.848",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "301.6259765625",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "93d842b223394e8b9642c856fe679494bd3609d9",
          "message": "Bump clap from 4.2.5 to 4.2.7 (#3260)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.2.5 to 4.2.7.\r\n- [Release notes](https://github.com/clap-rs/clap/releases)\r\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/clap-rs/clap/compare/v4.2.5...v4.2.7)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: clap\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-05T10:29:47Z",
          "url": "https://github.com/yewstack/yew/commit/93d842b223394e8b9642c856fe679494bd3609d9"
        },
        "date": 1683283634196,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "150.96300000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "164.057",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "447.5305",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "212.816",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "120.869",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "162.22699999999998",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "1936.9445",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "364.2235",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "128.663",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.177849769592285",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.8975114822387695",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "7.138667106628418",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.717877388000488",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "47.63289642333984",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1878.755",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "48.971999999999994",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "283.1320000000002",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "304.8251953125",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "146.608",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "163.32049999999998",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "317.34900000000005",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "58.2305",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "78.1685",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "125.0795",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "1846.57",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "344.221",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "124.19",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.12314510345459",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.506157875061035",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.973588943481445",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.577531814575195",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "46.413421630859375",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1878.99",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "55.144000000000005",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "301.2640000000002",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "301.20703125",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "93d842b223394e8b9642c856fe679494bd3609d9",
          "message": "Bump clap from 4.2.5 to 4.2.7 (#3260)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.2.5 to 4.2.7.\r\n- [Release notes](https://github.com/clap-rs/clap/releases)\r\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/clap-rs/clap/compare/v4.2.5...v4.2.7)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: clap\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-05T10:29:47Z",
          "url": "https://github.com/yewstack/yew/commit/93d842b223394e8b9642c856fe679494bd3609d9"
        },
        "date": 1683283710897,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "168.164",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "190.8245",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "639.807",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "245.6655",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "167.5675",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "236.095",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "2223.315",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "436.08",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "167.7735",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.128030776977539",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.895668983459473",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "7.201393127441406",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.657085418701172",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "47.83723831176758",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1910.085",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "50.81199999999999",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "360.10000000000014",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "305.2412109375",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "167.2335",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "191.963",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "457.506",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "98.6125",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "131.15449999999998",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "196.4485",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "2117.2034999999996",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "413.693",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "159.6525",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.122443199157715",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.771056175231934",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.887017250061035",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.445186614990234",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "46.59069633483887",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1919.785",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "56.24399999999999",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "343.4400000000001",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "301.6259765625",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "93d842b223394e8b9642c856fe679494bd3609d9",
          "message": "Bump clap from 4.2.5 to 4.2.7 (#3260)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.2.5 to 4.2.7.\r\n- [Release notes](https://github.com/clap-rs/clap/releases)\r\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/clap-rs/clap/compare/v4.2.5...v4.2.7)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: clap\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-05T10:29:47Z",
          "url": "https://github.com/yewstack/yew/commit/93d842b223394e8b9642c856fe679494bd3609d9"
        },
        "date": 1683283948097,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "196.338",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "208.2735",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "644.9884999999999",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "284.78700000000003",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "146.419",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "190.8415",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "2852.7065",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "521.432",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "191.3095",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "1.9200620651245115",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.684195518493652",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "6.99040412902832",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.719670295715332",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "47.69056415557861",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "1904.045",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "60.567999999999984",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "328.61600000000004",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "304.8251953125",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "202.1955",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "215.925",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "504.772",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "96.425",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "114.599",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "160.9735",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "2863.1465",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "559.0350000000001",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "203.2205",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.1277008056640625",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.791716575622559",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.947816848754883",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.544079780578613",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "46.641714096069336",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1906.645",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "51.48",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "337.22400000000016",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "301.20703125",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "93d842b223394e8b9642c856fe679494bd3609d9",
          "message": "Bump clap from 4.2.5 to 4.2.7 (#3260)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.2.5 to 4.2.7.\r\n- [Release notes](https://github.com/clap-rs/clap/releases)\r\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/clap-rs/clap/compare/v4.2.5...v4.2.7)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: clap\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-05T10:29:47Z",
          "url": "https://github.com/yewstack/yew/commit/93d842b223394e8b9642c856fe679494bd3609d9"
        },
        "date": 1683284319345,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "228.4665",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "253.7285",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "685.444",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "296.515",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "163.527",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "243.857",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "3074.4765",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "573.742",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "199.401",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "2.1188430786132812",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "6.895966529846191",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "6.845170974731445",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "5.72673225402832",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "47.65752029418945",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "2051.646",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "66.048",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "376.1680000000001",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "304.8251953125",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "221.2575",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "248.684",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "472.2795",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "89.0515",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "114.842",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "185.8415",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "2864.748",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "545.671",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "175.938",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "2.1216955184936523",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "6.506054878234863",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "6.892366409301758",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "5.527411460876465",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "46.4447021484375",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "1884.2200000000005",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "56.396",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "334.5600000000001",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "301.20703125",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "hikaricai",
            "username": "hikaricai",
            "email": "13061980190@163.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a2141ebe42deeeca15f6fe5166ec2691e87a6e1d",
          "message": "Fix lazy-load of js_callback example (#3263)",
          "timestamp": "2023-05-19T15:27:35Z",
          "url": "https://github.com/yewstack/yew/commit/a2141ebe42deeeca15f6fe5166ec2691e87a6e1d"
        },
        "date": 1684512040991,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3ec1b18444977334094c7f80be66478a65b34459",
          "message": "Bump quote from 1.0.26 to 1.0.28 (#3276)\n\nBumps [quote](https://github.com/dtolnay/quote) from 1.0.26 to 1.0.28.\r\n- [Release notes](https://github.com/dtolnay/quote/releases)\r\n- [Commits](https://github.com/dtolnay/quote/compare/1.0.26...1.0.28)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: quote\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-31T14:31:02Z",
          "url": "https://github.com/yewstack/yew/commit/3ec1b18444977334094c7f80be66478a65b34459"
        },
        "date": 1685545433358,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b5de832c77dd81d750cf7cc8540396315c71742a",
          "message": "Bump fake from 2.5.0 to 2.6.1 (#3267)\n\nBumps [fake](https://github.com/cksac/fake-rs) from 2.5.0 to 2.6.1.\r\n- [Commits](https://github.com/cksac/fake-rs/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: fake\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-01T12:09:31Z",
          "url": "https://github.com/yewstack/yew/commit/b5de832c77dd81d750cf7cc8540396315c71742a"
        },
        "date": 1685622639133,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b5de832c77dd81d750cf7cc8540396315c71742a",
          "message": "Bump fake from 2.5.0 to 2.6.1 (#3267)\n\nBumps [fake](https://github.com/cksac/fake-rs) from 2.5.0 to 2.6.1.\r\n- [Commits](https://github.com/cksac/fake-rs/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: fake\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-01T12:09:31Z",
          "url": "https://github.com/yewstack/yew/commit/b5de832c77dd81d750cf7cc8540396315c71742a"
        },
        "date": 1685622648675,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b5de832c77dd81d750cf7cc8540396315c71742a",
          "message": "Bump fake from 2.5.0 to 2.6.1 (#3267)\n\nBumps [fake](https://github.com/cksac/fake-rs) from 2.5.0 to 2.6.1.\r\n- [Commits](https://github.com/cksac/fake-rs/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: fake\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-01T12:09:31Z",
          "url": "https://github.com/yewstack/yew/commit/b5de832c77dd81d750cf7cc8540396315c71742a"
        },
        "date": 1685623205362,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b5de832c77dd81d750cf7cc8540396315c71742a",
          "message": "Bump fake from 2.5.0 to 2.6.1 (#3267)\n\nBumps [fake](https://github.com/cksac/fake-rs) from 2.5.0 to 2.6.1.\r\n- [Commits](https://github.com/cksac/fake-rs/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: fake\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-01T12:09:31Z",
          "url": "https://github.com/yewstack/yew/commit/b5de832c77dd81d750cf7cc8540396315c71742a"
        },
        "date": 1685623238179,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shubh Sharma",
            "username": "shubhsharma19",
            "email": "69891912+shubhsharma19@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "40514a91d958ac31253478f50883bd5e5c74ed7e",
          "message": "Improve SECURITY.md (#3277)\n\n* Improve SECURITY.md\n\n* Update SECURITY.md\n\n* Update SECURITY.md",
          "timestamp": "2023-06-01T16:11:37Z",
          "url": "https://github.com/yewstack/yew/commit/40514a91d958ac31253478f50883bd5e5c74ed7e"
        },
        "date": 1685637866246,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kaede Hoshikawa",
            "username": "futursolo",
            "email": "futursolo@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "71b0f206a133387381d0dd2cbe8e87c74d9b3638",
          "message": "Allow any type to be used as Children (take 2) (#3289)\n\n* Partially copy useful implementation.\n\n* Adjust conversion.\n\n* Temporary fix iterator.\n\n* Add ToString implementation.\n\n* Add Renderable trait.\n\n* Make Macro tests pass.\n\n* Add tests for render_prop as Children.\n\n* Update benchmark and Children used in yew packages.\n\n* Selective suppress lints.\n\n* Rollback unintentional rollback.\n\n* Fix rustfmt.\n\n* Remove unneeded implementation.\n\n* Update Comment.\n\n* Rollback more changes.\n\n* Rollback more changes.\n\n* Fix website.\n\n* Fix documentation tests.\n\n* Add prelude.\n\n* Fix test.\n\n* Blanket Implementation for &'_ T for Renderable types.\n\n* Implement Renderable for &str.\n\n* Update signature.\n\n* Update children to Html in examples.\n\n* Remove unnecessary dereferencing.\n\n* Rollback nested_list example.\n\n* Fix comment.\n\n* Convert to Pattern Matching.\n\n* Add tracing issue.\n\n* Rename Renderable to ToHtml.\n\n* Move ToHtml to yew::html.\n\n* Convert more to match pattern.",
          "timestamp": "2023-06-11T10:33:39Z",
          "url": "https://github.com/yewstack/yew/commit/71b0f206a133387381d0dd2cbe8e87c74d9b3638"
        },
        "date": 1686481536085,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Nicholas Guyett",
            "username": "nicholasguyett",
            "email": "nicholas@guyett.me"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0cd979c956acdfa809076e5357d10f11d25d130a",
          "message": "Toggle editing state on edit submit.  Fixes #3124 (#3281)",
          "timestamp": "2023-06-11T11:27:58Z",
          "url": "https://github.com/yewstack/yew/commit/0cd979c956acdfa809076e5357d10f11d25d130a"
        },
        "date": 1686484595520,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Nicholas Guyett",
            "username": "nicholasguyett",
            "email": "nicholas@guyett.me"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0cd979c956acdfa809076e5357d10f11d25d130a",
          "message": "Toggle editing state on edit submit.  Fixes #3124 (#3281)",
          "timestamp": "2023-06-11T11:27:58Z",
          "url": "https://github.com/yewstack/yew/commit/0cd979c956acdfa809076e5357d10f11d25d130a"
        },
        "date": 1686484599232,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Nicholas Guyett",
            "username": "nicholasguyett",
            "email": "nicholas@guyett.me"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0cd979c956acdfa809076e5357d10f11d25d130a",
          "message": "Toggle editing state on edit submit.  Fixes #3124 (#3281)",
          "timestamp": "2023-06-11T11:27:58Z",
          "url": "https://github.com/yewstack/yew/commit/0cd979c956acdfa809076e5357d10f11d25d130a"
        },
        "date": 1686484922560,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0099921647780045d820091b987bff66e5ca36ab",
          "message": "Bump js-sys from 0.3.63 to 0.3.64 (#3306)\n\nBumps [js-sys](https://github.com/rustwasm/wasm-bindgen) from 0.3.63 to 0.3.64.\r\n- [Release notes](https://github.com/rustwasm/wasm-bindgen/releases)\r\n- [Changelog](https://github.com/rustwasm/wasm-bindgen/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/rustwasm/wasm-bindgen/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: js-sys\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-21T13:38:57Z",
          "url": "https://github.com/yewstack/yew/commit/0099921647780045d820091b987bff66e5ca36ab"
        },
        "date": 1687356575112,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0099921647780045d820091b987bff66e5ca36ab",
          "message": "Bump js-sys from 0.3.63 to 0.3.64 (#3306)\n\nBumps [js-sys](https://github.com/rustwasm/wasm-bindgen) from 0.3.63 to 0.3.64.\r\n- [Release notes](https://github.com/rustwasm/wasm-bindgen/releases)\r\n- [Changelog](https://github.com/rustwasm/wasm-bindgen/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/rustwasm/wasm-bindgen/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: js-sys\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-21T13:38:57Z",
          "url": "https://github.com/yewstack/yew/commit/0099921647780045d820091b987bff66e5ca36ab"
        },
        "date": 1687356589987,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0099921647780045d820091b987bff66e5ca36ab",
          "message": "Bump js-sys from 0.3.63 to 0.3.64 (#3306)\n\nBumps [js-sys](https://github.com/rustwasm/wasm-bindgen) from 0.3.63 to 0.3.64.\r\n- [Release notes](https://github.com/rustwasm/wasm-bindgen/releases)\r\n- [Changelog](https://github.com/rustwasm/wasm-bindgen/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/rustwasm/wasm-bindgen/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: js-sys\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-21T13:38:57Z",
          "url": "https://github.com/yewstack/yew/commit/0099921647780045d820091b987bff66e5ca36ab"
        },
        "date": 1687356747163,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0099921647780045d820091b987bff66e5ca36ab",
          "message": "Bump js-sys from 0.3.63 to 0.3.64 (#3306)\n\nBumps [js-sys](https://github.com/rustwasm/wasm-bindgen) from 0.3.63 to 0.3.64.\r\n- [Release notes](https://github.com/rustwasm/wasm-bindgen/releases)\r\n- [Changelog](https://github.com/rustwasm/wasm-bindgen/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/rustwasm/wasm-bindgen/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: js-sys\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-21T13:38:57Z",
          "url": "https://github.com/yewstack/yew/commit/0099921647780045d820091b987bff66e5ca36ab"
        },
        "date": 1687356909954,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0099921647780045d820091b987bff66e5ca36ab",
          "message": "Bump js-sys from 0.3.63 to 0.3.64 (#3306)\n\nBumps [js-sys](https://github.com/rustwasm/wasm-bindgen) from 0.3.63 to 0.3.64.\r\n- [Release notes](https://github.com/rustwasm/wasm-bindgen/releases)\r\n- [Changelog](https://github.com/rustwasm/wasm-bindgen/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/rustwasm/wasm-bindgen/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: js-sys\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-21T13:38:57Z",
          "url": "https://github.com/yewstack/yew/commit/0099921647780045d820091b987bff66e5ca36ab"
        },
        "date": 1687357144920,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8fbe4beb513df5447189eb7526e7281b2c099dc3",
          "message": "Bump uuid from 1.3.3 to 1.3.4 (#3304)\n\nBumps [uuid](https://github.com/uuid-rs/uuid) from 1.3.3 to 1.3.4.\r\n- [Release notes](https://github.com/uuid-rs/uuid/releases)\r\n- [Commits](https://github.com/uuid-rs/uuid/compare/1.3.3...1.3.4)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: uuid\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-21T14:39:31Z",
          "url": "https://github.com/yewstack/yew/commit/8fbe4beb513df5447189eb7526e7281b2c099dc3"
        },
        "date": 1687360362414,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d61d0c21ea1e9e53139ed8405ab7b4ecb66f78a0",
          "message": "Bump regex from 1.8.3 to 1.8.4 (#3310)\n\nBumps [regex](https://github.com/rust-lang/regex) from 1.8.3 to 1.8.4.\r\n- [Release notes](https://github.com/rust-lang/regex/releases)\r\n- [Changelog](https://github.com/rust-lang/regex/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/rust-lang/regex/compare/1.8.3...1.8.4)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: regex\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-29T04:54:04Z",
          "url": "https://github.com/yewstack/yew/commit/d61d0c21ea1e9e53139ed8405ab7b4ecb66f78a0"
        },
        "date": 1688015373001,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d61d0c21ea1e9e53139ed8405ab7b4ecb66f78a0",
          "message": "Bump regex from 1.8.3 to 1.8.4 (#3310)\n\nBumps [regex](https://github.com/rust-lang/regex) from 1.8.3 to 1.8.4.\r\n- [Release notes](https://github.com/rust-lang/regex/releases)\r\n- [Changelog](https://github.com/rust-lang/regex/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/rust-lang/regex/compare/1.8.3...1.8.4)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: regex\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-29T04:54:04Z",
          "url": "https://github.com/yewstack/yew/commit/d61d0c21ea1e9e53139ed8405ab7b4ecb66f78a0"
        },
        "date": 1688015521893,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d61d0c21ea1e9e53139ed8405ab7b4ecb66f78a0",
          "message": "Bump regex from 1.8.3 to 1.8.4 (#3310)\n\nBumps [regex](https://github.com/rust-lang/regex) from 1.8.3 to 1.8.4.\r\n- [Release notes](https://github.com/rust-lang/regex/releases)\r\n- [Changelog](https://github.com/rust-lang/regex/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/rust-lang/regex/compare/1.8.3...1.8.4)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: regex\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-29T04:54:04Z",
          "url": "https://github.com/yewstack/yew/commit/d61d0c21ea1e9e53139ed8405ab7b4ecb66f78a0"
        },
        "date": 1688015568741,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d61d0c21ea1e9e53139ed8405ab7b4ecb66f78a0",
          "message": "Bump regex from 1.8.3 to 1.8.4 (#3310)\n\nBumps [regex](https://github.com/rust-lang/regex) from 1.8.3 to 1.8.4.\r\n- [Release notes](https://github.com/rust-lang/regex/releases)\r\n- [Changelog](https://github.com/rust-lang/regex/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/rust-lang/regex/compare/1.8.3...1.8.4)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: regex\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-29T04:54:04Z",
          "url": "https://github.com/yewstack/yew/commit/d61d0c21ea1e9e53139ed8405ab7b4ecb66f78a0"
        },
        "date": 1688015822517,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d61d0c21ea1e9e53139ed8405ab7b4ecb66f78a0",
          "message": "Bump regex from 1.8.3 to 1.8.4 (#3310)\n\nBumps [regex](https://github.com/rust-lang/regex) from 1.8.3 to 1.8.4.\r\n- [Release notes](https://github.com/rust-lang/regex/releases)\r\n- [Changelog](https://github.com/rust-lang/regex/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/rust-lang/regex/compare/1.8.3...1.8.4)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: regex\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-29T04:54:04Z",
          "url": "https://github.com/yewstack/yew/commit/d61d0c21ea1e9e53139ed8405ab7b4ecb66f78a0"
        },
        "date": 1688015838265,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fa1221b23e5187c66f6b397c50257d0caca593d4",
          "message": "Bump proc-macro2 from 1.0.59 to 1.0.63 (#3324)\n\nBumps [proc-macro2](https://github.com/dtolnay/proc-macro2) from 1.0.59 to 1.0.63.\r\n- [Release notes](https://github.com/dtolnay/proc-macro2/releases)\r\n- [Commits](https://github.com/dtolnay/proc-macro2/compare/1.0.59...1.0.63)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: proc-macro2\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-29T10:46:53Z",
          "url": "https://github.com/yewstack/yew/commit/fa1221b23e5187c66f6b397c50257d0caca593d4"
        },
        "date": 1688036489472,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fa1221b23e5187c66f6b397c50257d0caca593d4",
          "message": "Bump proc-macro2 from 1.0.59 to 1.0.63 (#3324)\n\nBumps [proc-macro2](https://github.com/dtolnay/proc-macro2) from 1.0.59 to 1.0.63.\r\n- [Release notes](https://github.com/dtolnay/proc-macro2/releases)\r\n- [Commits](https://github.com/dtolnay/proc-macro2/compare/1.0.59...1.0.63)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: proc-macro2\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-29T10:46:53Z",
          "url": "https://github.com/yewstack/yew/commit/fa1221b23e5187c66f6b397c50257d0caca593d4"
        },
        "date": 1688036802957,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fa1221b23e5187c66f6b397c50257d0caca593d4",
          "message": "Bump proc-macro2 from 1.0.59 to 1.0.63 (#3324)\n\nBumps [proc-macro2](https://github.com/dtolnay/proc-macro2) from 1.0.59 to 1.0.63.\r\n- [Release notes](https://github.com/dtolnay/proc-macro2/releases)\r\n- [Commits](https://github.com/dtolnay/proc-macro2/compare/1.0.59...1.0.63)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: proc-macro2\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-29T10:46:53Z",
          "url": "https://github.com/yewstack/yew/commit/fa1221b23e5187c66f6b397c50257d0caca593d4"
        },
        "date": 1688037084755,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fa1221b23e5187c66f6b397c50257d0caca593d4",
          "message": "Bump proc-macro2 from 1.0.59 to 1.0.63 (#3324)\n\nBumps [proc-macro2](https://github.com/dtolnay/proc-macro2) from 1.0.59 to 1.0.63.\r\n- [Release notes](https://github.com/dtolnay/proc-macro2/releases)\r\n- [Commits](https://github.com/dtolnay/proc-macro2/compare/1.0.59...1.0.63)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: proc-macro2\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-29T10:46:53Z",
          "url": "https://github.com/yewstack/yew/commit/fa1221b23e5187c66f6b397c50257d0caca593d4"
        },
        "date": 1688037342522,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ErnestoZ",
            "username": "ernstvanderlinden",
            "email": "ernst.vanderlinden@ernestoz.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b33214efc1acb0395d6909e827866d7855045b2a",
          "message": "Update web-sys.mdx, typo: JavaSciprt -> JavaScript (#3314)",
          "timestamp": "2023-07-01T01:34:17Z",
          "url": "https://github.com/yewstack/yew/commit/b33214efc1acb0395d6909e827866d7855045b2a"
        },
        "date": 1688176223528,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f8ae717818011917bee68162a880f1d96e384ab2",
          "message": "Bump word-wrap from 1.2.3 to 1.2.4 in /website (#3353)\n\nBumps [word-wrap](https://github.com/jonschlinkert/word-wrap) from 1.2.3 to 1.2.4.\r\n- [Release notes](https://github.com/jonschlinkert/word-wrap/releases)\r\n- [Commits](https://github.com/jonschlinkert/word-wrap/compare/1.2.3...1.2.4)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: word-wrap\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-29T13:07:38Z",
          "url": "https://github.com/yewstack/yew/commit/f8ae717818011917bee68162a880f1d96e384ab2"
        },
        "date": 1690637339289,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f8ae717818011917bee68162a880f1d96e384ab2",
          "message": "Bump word-wrap from 1.2.3 to 1.2.4 in /website (#3353)\n\nBumps [word-wrap](https://github.com/jonschlinkert/word-wrap) from 1.2.3 to 1.2.4.\r\n- [Release notes](https://github.com/jonschlinkert/word-wrap/releases)\r\n- [Commits](https://github.com/jonschlinkert/word-wrap/compare/1.2.3...1.2.4)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: word-wrap\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-29T13:07:38Z",
          "url": "https://github.com/yewstack/yew/commit/f8ae717818011917bee68162a880f1d96e384ab2"
        },
        "date": 1690637356659,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4daa2ecc8a105811aab70e42a29a24eb30edd64f",
          "message": "Bump prettyplease from 0.2.9 to 0.2.12 (#3365)\n\nBumps [prettyplease](https://github.com/dtolnay/prettyplease) from 0.2.9 to 0.2.12.\r\n- [Release notes](https://github.com/dtolnay/prettyplease/releases)\r\n- [Commits](https://github.com/dtolnay/prettyplease/compare/0.2.9...0.2.12)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: prettyplease\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-29T13:35:54Z",
          "url": "https://github.com/yewstack/yew/commit/4daa2ecc8a105811aab70e42a29a24eb30edd64f"
        },
        "date": 1690638656406,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4daa2ecc8a105811aab70e42a29a24eb30edd64f",
          "message": "Bump prettyplease from 0.2.9 to 0.2.12 (#3365)\n\nBumps [prettyplease](https://github.com/dtolnay/prettyplease) from 0.2.9 to 0.2.12.\r\n- [Release notes](https://github.com/dtolnay/prettyplease/releases)\r\n- [Commits](https://github.com/dtolnay/prettyplease/compare/0.2.9...0.2.12)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: prettyplease\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-29T13:35:54Z",
          "url": "https://github.com/yewstack/yew/commit/4daa2ecc8a105811aab70e42a29a24eb30edd64f"
        },
        "date": 1690638900777,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4daa2ecc8a105811aab70e42a29a24eb30edd64f",
          "message": "Bump prettyplease from 0.2.9 to 0.2.12 (#3365)\n\nBumps [prettyplease](https://github.com/dtolnay/prettyplease) from 0.2.9 to 0.2.12.\r\n- [Release notes](https://github.com/dtolnay/prettyplease/releases)\r\n- [Commits](https://github.com/dtolnay/prettyplease/compare/0.2.9...0.2.12)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: prettyplease\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-29T13:35:54Z",
          "url": "https://github.com/yewstack/yew/commit/4daa2ecc8a105811aab70e42a29a24eb30edd64f"
        },
        "date": 1690639123188,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xu Shaohua",
            "username": "XuShaohua",
            "email": "shaohua@biofan.org"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a9ab085e74ca8e83923d7337f300103221182f66",
          "message": "Fix input dynamic text rendered as textarea (#3239) (#3301)",
          "timestamp": "2023-08-05T13:58:19Z",
          "url": "https://github.com/yewstack/yew/commit/a9ab085e74ca8e83923d7337f300103221182f66"
        },
        "date": 1691244895101,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Muhammad Hamza",
            "username": "hamza1311",
            "email": "muhammadhamza1311@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3e9e253e66d60cf5fbaa2fa4d9817a6a322a299d",
          "message": "Keep checked attribute for elements without special handling (#3373)\n\n* Return checked attr for non-input elements\r\n\r\n* Add tests\r\n\r\n* fine",
          "timestamp": "2023-08-11T17:16:06Z",
          "url": "https://github.com/yewstack/yew/commit/3e9e253e66d60cf5fbaa2fa4d9817a6a322a299d"
        },
        "date": 1691774813489,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Muhammad Hamza",
            "username": "hamza1311",
            "email": "muhammadhamza1311@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3e9e253e66d60cf5fbaa2fa4d9817a6a322a299d",
          "message": "Keep checked attribute for elements without special handling (#3373)\n\n* Return checked attr for non-input elements\r\n\r\n* Add tests\r\n\r\n* fine",
          "timestamp": "2023-08-11T17:16:06Z",
          "url": "https://github.com/yewstack/yew/commit/3e9e253e66d60cf5fbaa2fa4d9817a6a322a299d"
        },
        "date": 1691775126858,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mikita Bykau",
            "username": "tikitko",
            "email": "bns.6587@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "46bbb0cfe567a347e5c3162fe07973e84625cc68",
          "message": "Added the ability to pass state through a link. (#3358)\n\n* state-for-link\r\n\r\n* S generic as last generic\r\n\r\n* state as last clone",
          "timestamp": "2023-08-14T12:13:00Z",
          "url": "https://github.com/yewstack/yew/commit/46bbb0cfe567a347e5c3162fe07973e84625cc68"
        },
        "date": 1692016010211,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Muhammad Hamza",
            "username": "hamza1311",
            "email": "muhammadhamza1311@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "41d42fb89deb95945a237c95bb062c3de3392061",
          "message": "Make signature of use_future_with consistent (#3372)",
          "timestamp": "2023-08-15T11:32:27Z",
          "url": "https://github.com/yewstack/yew/commit/41d42fb89deb95945a237c95bb062c3de3392061"
        },
        "date": 1692100112366,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jelllly420",
            "username": "jellllly420",
            "email": "64725601+jellllly420@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a27076db8660019178bec47f03cb8b836a56d70c",
          "message": "Add breaking changes section to changelog generator (#3255)\n\nFixes #3212\r\n\r\n-------\r\n\r\n* Add breaking changes section to changelog generator.\r\n\r\n* re-design test of changelog\r\n\r\n* format fix\r\n\r\n* Update tools/changelog/tests/generate_yew_changelog_file.rs\r\n\r\nCo-authored-by: Muhammad Hamza <muhammadhamza1311@gmail.com>\r\n\r\n---------\r\n\r\nCo-authored-by: jelly <jelly.zhao.42@gmail.com>\r\nCo-authored-by: Muhammad Hamza <muhammadhamza1311@gmail.com>",
          "timestamp": "2023-08-18T19:43:59Z",
          "url": "https://github.com/yewstack/yew/commit/a27076db8660019178bec47f03cb8b836a56d70c"
        },
        "date": 1692388850578,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Muhammad Hamza",
            "username": "hamza1311",
            "email": "muhammadhamza1311@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "42e1890f0322e6e965615588bb8c488fe59924d5",
          "message": "Update signature of use_prepared_state/use_transitive_state (#3376)\n\n* Update signature of use_prepared_state\r\n\r\n* Update signature of use_transitive_state\r\n\r\n* Migration guide + example\r\n\r\n* bless trybuild tests\r\n\r\n* please fmt\r\n\r\n* there's one usage here as well\r\n\r\n* use_prepared_state_with_suspension needs updates\r\n\r\n* updated tests",
          "timestamp": "2023-08-19T12:58:36Z",
          "url": "https://github.com/yewstack/yew/commit/42e1890f0322e6e965615588bb8c488fe59924d5"
        },
        "date": 1692451101470,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kaede Hoshikawa",
            "username": "futursolo",
            "email": "futursolo@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b28e69a574fbaa7e18e0d2536cf9113602dc90e2",
          "message": "Remove compatibility code before 1.64 (#3379)",
          "timestamp": "2023-08-19T13:57:16Z",
          "url": "https://github.com/yewstack/yew/commit/b28e69a574fbaa7e18e0d2536cf9113602dc90e2"
        },
        "date": 1692454587775,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tim Kurdov",
            "username": "schvv31n",
            "email": "tim.kurdov@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3c4ac56980192b3fb6afb02ad01b97ebc42b32de",
          "message": "Add `IntoPropValue` implementation to convert from `Cow`s to `AttrValue` (#3346)\n\n* added IntoPropValue impls to & from Cows\r\n\r\n* fixed formatting & test's expected output\r\n\r\n* fixed formatting\r\n\r\n* fixed macro test's expected output\r\n\r\n* removed conversion to String & Rc\r\n\r\n* fixed macro tests\r\n\r\n* fixed macro tests",
          "timestamp": "2023-08-21T16:31:29Z",
          "url": "https://github.com/yewstack/yew/commit/3c4ac56980192b3fb6afb02ad01b97ebc42b32de"
        },
        "date": 1692636555436,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tim Kurdov",
            "username": "schvv31n",
            "email": "tim.kurdov@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3c4ac56980192b3fb6afb02ad01b97ebc42b32de",
          "message": "Add `IntoPropValue` implementation to convert from `Cow`s to `AttrValue` (#3346)\n\n* added IntoPropValue impls to & from Cows\r\n\r\n* fixed formatting & test's expected output\r\n\r\n* fixed formatting\r\n\r\n* fixed macro test's expected output\r\n\r\n* removed conversion to String & Rc\r\n\r\n* fixed macro tests\r\n\r\n* fixed macro tests",
          "timestamp": "2023-08-21T16:31:29Z",
          "url": "https://github.com/yewstack/yew/commit/3c4ac56980192b3fb6afb02ad01b97ebc42b32de"
        },
        "date": 1692636677885,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kaede Hoshikawa",
            "username": "futursolo",
            "email": "futursolo@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7ef8e0da18808e9e4ef3e7ff36a1d6a20019d087",
          "message": "Mark VNode as #[must_use] (#3387)\n\nThis fixes for Rust Release 1.72.\r\nRust 1.72 makes `From::from` a must use, which effectively makes `html!` a must use.\r\n\r\nI have tried various ways to suppress `unused_must_use` for `html!`.\r\nHowever, it is not effective. So I added `let _ = ` to tests.\r\n\r\nI have also made `VNode` a `#[must_use]` so the diagnostic will be easier to understand.\r\n\r\n---\r\n\r\n* Fix clippy.\r\n\r\n* Make html must use.",
          "timestamp": "2023-08-28T15:01:07Z",
          "url": "https://github.com/yewstack/yew/commit/7ef8e0da18808e9e4ef3e7ff36a1d6a20019d087"
        },
        "date": 1693235897281,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Muhammad Hamza",
            "username": "hamza1311",
            "email": "muhammadhamza1311@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4038a9794b754412a18bc2a8e6b6fdcf486930bb",
          "message": "Fix inspect-next-changelogs workflows (#3383)\n\n* Fix inspect-next-changelogs workflows\r\n\r\n* Pass absolute path of CHANGELOG.md to the binary",
          "timestamp": "2023-09-02T09:56:02Z",
          "url": "https://github.com/yewstack/yew/commit/4038a9794b754412a18bc2a8e6b6fdcf486930bb"
        },
        "date": 1693649862849,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Sean Bruton",
            "username": "sbruton",
            "email": "sbruton@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "73f4bb91cfa7e631c5a84cc9e4bab9f6fba075bf",
          "message": "Fix rust-analyzer non_camel_case_types warning (#3388)",
          "timestamp": "2023-09-05T19:35:31Z",
          "url": "https://github.com/yewstack/yew/commit/73f4bb91cfa7e631c5a84cc9e4bab9f6fba075bf"
        },
        "date": 1693943804373,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kaede Hoshikawa",
            "username": "futursolo",
            "email": "futursolo@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "eec07583f16840f2c334c1c2f9b45688e105bb8f",
          "message": "Agent v2 (#2773)\n\n* Make private bridges.\r\n\r\n* Add worker agent.\r\n\r\n* Add task type.\r\n\r\n* Memorised Task.\r\n\r\n* Add station.\r\n\r\n* Add Station Agent.\r\n\r\n* Subscription.\r\n\r\n* Station hooks.\r\n\r\n* Reactor Agents.\r\n\r\n* Add more description.\r\n\r\n* Restart station when closed.\r\n\r\n* Remove Station restart.\r\n\r\n* Send finish message to bridges.\r\n\r\n* Adds a method to read whether a bridge has received finish message for a subscription.\r\n\r\n* Update Reactor Agent.\r\n\r\n* Decouple macros from it.\r\n\r\n* Reactor Macro.\r\n\r\n* Reactivate Task.\r\n\r\n* Slightly adjust API.\r\n\r\n* Add documentation for reactor agents.\r\n\r\n* Remove Station.\r\n\r\n* Create Task macro.\r\n\r\n* Migrate Example.\r\n\r\n* Simplify Task Agent Design.\r\n\r\n* Implement Sink.\r\n\r\n* Agent -> Task in Example.\r\n\r\n* Switch to Registrable.\r\n\r\n* AgentScopeExt.\r\n\r\n* Finish AgentScopeExt.\r\n\r\n* Prelude.\r\n\r\n* Adjust prelude.\r\n\r\n* Fix imports.\r\n\r\n* Yew Agent.\r\n\r\n* Switch to upstreamed version of gloo.\r\n\r\n* Add stub reset.\r\n\r\n* Remove example.\r\n\r\n* Add Reset for Worker agents.\r\n\r\n* merge fix-ci into \"agent-v2\"\r\n\r\n* Switch to released version of gloo.\r\n\r\n* Adds Runtime.\r\n\r\n* A LocalRuntime.\r\n\r\n* Add note.\r\n\r\n* Add SSR benchmark.\r\n\r\n* Only create default runtime if no custom runtime is set.\r\n\r\n* Use jemalloc for benchmarking.\r\n\r\n* Remove once_cell for web assembly.\r\n\r\n* Add time.\r\n\r\n* Fix wasm_bindgen.\r\n\r\n* Adjust inlining.\r\n\r\n* merge local-runtime into \"agent-v2\"\r\n\r\n* Add reset.\r\n\r\n* Simplify task agent.\r\n\r\n* SSR for tasks.\r\n\r\n* Optimise benchmark output.\r\n\r\n* Optimise BufWriter.\r\n\r\n* Add json output.\r\n\r\n* Add Benchmark Workflow.\r\n\r\n* merge local-runtime into \"agent-v2\"\r\n\r\n* Makes Prepared States to be Rc'ed.\r\n\r\n* Move example.\r\n\r\n* Update example.\r\n\r\n* Implement prepared state for memorised tasks.\r\n\r\n* Make prepared states work on none runtime as well.\r\n\r\n* Finished prepared output.\r\n\r\n* Remove local set from tests.\r\n\r\n* Fix Workflow syntax.\r\n\r\n* Exclude benchmark from doc tests.\r\n\r\n* Tidy up the code.\r\n\r\n* Remove HashSet.\r\n\r\n* Fix rustfmt.\r\n\r\n* Some optimisation.\r\n\r\n* Use postcard.\r\n\r\n* Remove allocations.\r\n\r\n* Weak Ref.\r\n\r\n* Adjust feature flags.\r\n\r\n* Adds a pinned channel implementation.\r\n\r\n* Make Send bound explicit.\r\n\r\n* Migrate to pinned channel.\r\n\r\n* Implement on immutable reference.\r\n\r\n* Rename agent channel method.\r\n\r\n* Fix Sink close.\r\n\r\n* Fix closing.\r\n\r\n* Remove old platform.\r\n\r\n* Migrate to new macro.\r\n\r\n* Port Oneshot Agent.\r\n\r\n* Migrate reactor to gloo-worker.\r\n\r\n* Implement ScopeExt for Reactor.\r\n\r\n* Remove unneeded checks.\r\n\r\n* Update example note.\r\n\r\n* Fix doc tests.\r\n\r\n* Add an example for reactor agent.\r\n\r\n* Rename Prime to PrimeReactor.\r\n\r\n* Update Crate Information.\r\n\r\n* Remove unused dependencies.\r\n\r\n* Remove unused dependencies.\r\n\r\n* Update documentation.\r\n\r\n* Rename Bridge to Runner.\r\n\r\n* Update documentation.\r\n\r\n* Update documentation.\r\n\r\n* Update State name.\r\n\r\n* Merge outputs state for subscriptions.\r\n\r\n* Update documentation.\r\n\r\n* Fix doc link.\r\n\r\n* Make code link code link.\r\n\r\n* Make CODEC -> C.\r\n\r\n* Update Debug Implementation to type_name.\r\n\r\n* Fix readme.",
          "timestamp": "2023-09-18T08:30:02Z",
          "url": "https://github.com/yewstack/yew/commit/eec07583f16840f2c334c1c2f9b45688e105bb8f"
        },
        "date": 1695026938700,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Daniel Sousa",
            "username": "moyeah",
            "email": "da.arada@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "954b0ec7b92b2a34b5d45d14e4837d87092e40b7",
          "message": "Correct minor mistakes in website (#3405)\n\n* Remove whitespace in website tutorial\r\n\r\n* Update index.mdx\r\n\r\nRemove whitespace in tutorial.\r\n\r\n* Add more information to website.\r\n\r\nChanges to be committed:\r\n\tmodified:   website/docs/tutorial/index.mdx\r\n\tmodified:   website/versioned_docs/version-0.20/getting-started/build-a-sample-app.mdx\r\n\tmodified:   website/versioned_docs/version-0.20/tutorial/index.mdx\r\n\r\n* Remove error: doctest failed, to rerun pass `-p website-test --doc`\r\n\r\nChanges to be committed:\r\n\tmodified:   website/docs/migration-guides/yew/from-0_18_0-to-0_19_0.mdx\r\n\r\n* Correction of minor mistakes in website.\r\n\r\nChanges to be committed:\r\n\tmodified:   website/docs/getting-started/build-a-sample-app.mdx\r\n\tmodified:   website/docs/tutorial/index.mdx\r\n\tmodified:   website/versioned_docs/version-0.20/getting-started/build-a-sample-app.mdx\r\n\tmodified:   website/versioned_docs/version-0.20/tutorial/index.mdx\r\n\r\n* Run Prettier\r\nChanges to be committed:\r\n\tnew file:   package-lock.json\r\n\tmodified:   website/docs/tutorial/index.mdx\r\n\tmodified:   website/package-lock.json\r\n\tmodified:   website/package.json\r\n\tmodified:   website/versioned_docs/version-0.20/getting-started/build-a-sample-app.mdx",
          "timestamp": "2023-09-23T12:48:22Z",
          "url": "https://github.com/yewstack/yew/commit/954b0ec7b92b2a34b5d45d14e4837d87092e40b7"
        },
        "date": 1695473516958,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ca2aa2a4a6c0aa07bb636c68c0ffe07ba65804b0",
          "message": "Bump the cargo dependencies with 36 updates (#3408)\n\n* Bump the cargo-deps group with 36 updates\r\n\r\nBumps the cargo-deps group with 36 updates:\r\n\r\n| Package | From | To |\r\n| --- | --- | --- |\r\n| [proc-macro2](https://github.com/dtolnay/proc-macro2) | `1.0.63` | `1.0.67` |\r\n| [quote](https://github.com/dtolnay/quote) | `1.0.29` | `1.0.33` |\r\n| [syn](https://github.com/dtolnay/syn) | `2.0.27` | `2.0.37` |\r\n| [rustversion](https://github.com/dtolnay/rustversion) | `1.0.12` | `1.0.14` |\r\n| [trybuild](https://github.com/dtolnay/trybuild) | `1.0.80` | `1.0.85` |\r\n| [gloo-worker](https://github.com/rustwasm/gloo) | `0.3.0` | `0.4.0` |\r\n| [serde](https://github.com/serde-rs/serde) | `1.0.168` | `1.0.188` |\r\n| [prettyplease](https://github.com/dtolnay/prettyplease) | `0.2.12` | `0.2.15` |\r\n| [gloo](https://github.com/rustwasm/gloo) | `0.8.1` | `0.10.0` |\r\n| [urlencoding](https://github.com/kornelski/rust_urlencoding) | `2.1.2` | `2.1.3` |\r\n| [slab](https://github.com/tokio-rs/slab) | `0.4.8` | `0.4.9` |\r\n| [thiserror](https://github.com/dtolnay/thiserror) | `1.0.44` | `1.0.48` |\r\n| [implicit-clone](https://github.com/yewstack/implicit-clone) | `0.4.0` | `0.4.1` |\r\n| [tokio](https://github.com/tokio-rs/tokio) | `1.29.0` | `1.32.0` |\r\n| [jemallocator](https://github.com/tikv/jemallocator) | `0.5.0` | `0.5.4` |\r\n| [average](https://github.com/vks/average) | `0.13.1` | `0.14.1` |\r\n| [tabled](https://github.com/zhiburt/tabled) | `0.12.2` | `0.14.0` |\r\n| [indicatif](https://github.com/console-rs/indicatif) | `0.17.5` | `0.17.6` |\r\n| [serde_json](https://github.com/serde-rs/json) | `1.0.104` | `1.0.107` |\r\n| [clap](https://github.com/clap-rs/clap) | `4.3.9` | `4.4.4` |\r\n| [anyhow](https://github.com/dtolnay/anyhow) | `1.0.71` | `1.0.75` |\r\n| [chrono](https://github.com/chronotope/chrono) | `0.4.26` | `0.4.31` |\r\n| [git2](https://github.com/rust-lang/git2-rs) | `0.17.2` | `0.18.1` |\r\n| [regex](https://github.com/rust-lang/regex) | `1.8.4` | `1.9.4` |\r\n| [reqwest](https://github.com/seanmonstar/reqwest) | `0.11.18` | `0.11.20` |\r\n| [semver](https://github.com/dtolnay/semver) | `1.0.17` | `1.0.18` |\r\n| [gloo-net](https://github.com/rustwasm/gloo) | `0.3.0` | `0.4.0` |\r\n| [base64](https://github.com/marshallpierce/rust-base64) | `0.21.2` | `0.21.4` |\r\n| [strum_macros](https://github.com/Peternator7/strum) | `0.25.0` | `0.25.2` |\r\n| [log](https://github.com/rust-lang/log) | `0.4.19` | `0.4.20` |\r\n| [fake](https://github.com/cksac/fake-rs) | `2.6.1` | `2.8.0` |\r\n| [time](https://github.com/time-rs/time) | `0.3.22` | `0.3.28` |\r\n| [uuid](https://github.com/uuid-rs/uuid) | `1.4.0` | `1.4.1` |\r\n| [bytes](https://github.com/tokio-rs/bytes) | `1.4.0` | `1.5.0` |\r\n| [axum](https://github.com/tokio-rs/axum) | `0.6.18` | `0.6.20` |\r\n| [postcard](https://github.com/jamesmunns/postcard) | `1.0.6` | `1.0.7` |\r\n\r\n\r\nUpdates `proc-macro2` from 1.0.63 to 1.0.67\r\n- [Release notes](https://github.com/dtolnay/proc-macro2/releases)\r\n- [Commits](https://github.com/dtolnay/proc-macro2/compare/1.0.63...1.0.67)\r\n\r\nUpdates `quote` from 1.0.29 to 1.0.33\r\n- [Release notes](https://github.com/dtolnay/quote/releases)\r\n- [Commits](https://github.com/dtolnay/quote/compare/1.0.29...1.0.33)\r\n\r\nUpdates `syn` from 2.0.27 to 2.0.37\r\n- [Release notes](https://github.com/dtolnay/syn/releases)\r\n- [Commits](https://github.com/dtolnay/syn/compare/2.0.27...2.0.37)\r\n\r\nUpdates `rustversion` from 1.0.12 to 1.0.14\r\n- [Release notes](https://github.com/dtolnay/rustversion/releases)\r\n- [Commits](https://github.com/dtolnay/rustversion/compare/1.0.12...1.0.14)\r\n\r\nUpdates `trybuild` from 1.0.80 to 1.0.85\r\n- [Release notes](https://github.com/dtolnay/trybuild/releases)\r\n- [Commits](https://github.com/dtolnay/trybuild/compare/1.0.80...1.0.85)\r\n\r\nUpdates `gloo-worker` from 0.3.0 to 0.4.0\r\n- [Release notes](https://github.com/rustwasm/gloo/releases)\r\n- [Changelog](https://github.com/rustwasm/gloo/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/rustwasm/gloo/compare/0.3.0...0.4.0)\r\n\r\nUpdates `serde` from 1.0.168 to 1.0.188\r\n- [Release notes](https://github.com/serde-rs/serde/releases)\r\n- [Commits](https://github.com/serde-rs/serde/compare/v1.0.168...v1.0.188)\r\n\r\nUpdates `prettyplease` from 0.2.12 to 0.2.15\r\n- [Release notes](https://github.com/dtolnay/prettyplease/releases)\r\n- [Commits](https://github.com/dtolnay/prettyplease/compare/0.2.12...0.2.15)\r\n\r\nUpdates `gloo` from 0.8.1 to 0.10.0\r\n- [Release notes](https://github.com/rustwasm/gloo/releases)\r\n- [Changelog](https://github.com/rustwasm/gloo/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/rustwasm/gloo/commits)\r\n\r\nUpdates `urlencoding` from 2.1.2 to 2.1.3\r\n- [Commits](https://github.com/kornelski/rust_urlencoding/commits)\r\n\r\nUpdates `slab` from 0.4.8 to 0.4.9\r\n- [Release notes](https://github.com/tokio-rs/slab/releases)\r\n- [Changelog](https://github.com/tokio-rs/slab/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/tokio-rs/slab/compare/v0.4.8...v0.4.9)\r\n\r\nUpdates `thiserror` from 1.0.44 to 1.0.48\r\n- [Release notes](https://github.com/dtolnay/thiserror/releases)\r\n- [Commits](https://github.com/dtolnay/thiserror/compare/1.0.44...1.0.48)\r\n\r\nUpdates `implicit-clone` from 0.4.0 to 0.4.1\r\n- [Commits](https://github.com/yewstack/implicit-clone/compare/v0.4.0...v0.4.1)\r\n\r\nUpdates `tokio` from 1.29.0 to 1.32.0\r\n- [Release notes](https://github.com/tokio-rs/tokio/releases)\r\n- [Commits](https://github.com/tokio-rs/tokio/compare/tokio-1.29.0...tokio-1.32.0)\r\n\r\nUpdates `jemallocator` from 0.5.0 to 0.5.4\r\n- [Release notes](https://github.com/tikv/jemallocator/releases)\r\n- [Changelog](https://github.com/tikv/jemallocator/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/tikv/jemallocator/compare/0.5.0...0.5.4)\r\n\r\nUpdates `average` from 0.13.1 to 0.14.1\r\n- [Commits](https://github.com/vks/average/commits)\r\n\r\nUpdates `tabled` from 0.12.2 to 0.14.0\r\n- [Changelog](https://github.com/zhiburt/tabled/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/zhiburt/tabled/commits/v0.14.0)\r\n\r\nUpdates `indicatif` from 0.17.5 to 0.17.6\r\n- [Release notes](https://github.com/console-rs/indicatif/releases)\r\n- [Commits](https://github.com/console-rs/indicatif/compare/0.17.5...0.17.6)\r\n\r\nUpdates `serde_json` from 1.0.104 to 1.0.107\r\n- [Release notes](https://github.com/serde-rs/json/releases)\r\n- [Commits](https://github.com/serde-rs/json/compare/v1.0.104...v1.0.107)\r\n\r\nUpdates `clap` from 4.3.9 to 4.4.4\r\n- [Release notes](https://github.com/clap-rs/clap/releases)\r\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/clap-rs/clap/compare/v4.3.9...v4.4.4)\r\n\r\nUpdates `anyhow` from 1.0.71 to 1.0.75\r\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\r\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.71...1.0.75)\r\n\r\nUpdates `chrono` from 0.4.26 to 0.4.31\r\n- [Release notes](https://github.com/chronotope/chrono/releases)\r\n- [Changelog](https://github.com/chronotope/chrono/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/chronotope/chrono/compare/v0.4.26...v0.4.31)\r\n\r\nUpdates `git2` from 0.17.2 to 0.18.1\r\n- [Changelog](https://github.com/rust-lang/git2-rs/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/rust-lang/git2-rs/compare/0.17.2...git2-0.18.1)\r\n\r\nUpdates `regex` from 1.8.4 to 1.9.4\r\n- [Release notes](https://github.com/rust-lang/regex/releases)\r\n- [Changelog](https://github.com/rust-lang/regex/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/rust-lang/regex/compare/1.8.4...1.9.4)\r\n\r\nUpdates `reqwest` from 0.11.18 to 0.11.20\r\n- [Release notes](https://github.com/seanmonstar/reqwest/releases)\r\n- [Changelog](https://github.com/seanmonstar/reqwest/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/seanmonstar/reqwest/compare/v0.11.18...v0.11.20)\r\n\r\nUpdates `semver` from 1.0.17 to 1.0.18\r\n- [Release notes](https://github.com/dtolnay/semver/releases)\r\n- [Commits](https://github.com/dtolnay/semver/compare/1.0.17...1.0.18)\r\n\r\nUpdates `gloo-net` from 0.3.0 to 0.4.0\r\n- [Release notes](https://github.com/rustwasm/gloo/releases)\r\n- [Changelog](https://github.com/rustwasm/gloo/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/rustwasm/gloo/compare/0.3.0...0.4.0)\r\n\r\nUpdates `base64` from 0.21.2 to 0.21.4\r\n- [Changelog](https://github.com/marshallpierce/rust-base64/blob/master/RELEASE-NOTES.md)\r\n- [Commits](https://github.com/marshallpierce/rust-base64/compare/v0.21.2...v0.21.4)\r\n\r\nUpdates `strum_macros` from 0.25.0 to 0.25.2\r\n- [Changelog](https://github.com/Peternator7/strum/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/Peternator7/strum/commits)\r\n\r\nUpdates `log` from 0.4.19 to 0.4.20\r\n- [Release notes](https://github.com/rust-lang/log/releases)\r\n- [Changelog](https://github.com/rust-lang/log/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/rust-lang/log/compare/0.4.19...0.4.20)\r\n\r\nUpdates `fake` from 2.6.1 to 2.8.0\r\n- [Commits](https://github.com/cksac/fake-rs/commits)\r\n\r\nUpdates `time` from 0.3.22 to 0.3.28\r\n- [Release notes](https://github.com/time-rs/time/releases)\r\n- [Changelog](https://github.com/time-rs/time/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/time-rs/time/compare/v0.3.22...v0.3.28)\r\n\r\nUpdates `uuid` from 1.4.0 to 1.4.1\r\n- [Release notes](https://github.com/uuid-rs/uuid/releases)\r\n- [Commits](https://github.com/uuid-rs/uuid/compare/1.4.0...1.4.1)\r\n\r\nUpdates `bytes` from 1.4.0 to 1.5.0\r\n- [Release notes](https://github.com/tokio-rs/bytes/releases)\r\n- [Changelog](https://github.com/tokio-rs/bytes/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/tokio-rs/bytes/compare/v1.4.0...v1.5.0)\r\n\r\nUpdates `axum` from 0.6.18 to 0.6.20\r\n- [Release notes](https://github.com/tokio-rs/axum/releases)\r\n- [Changelog](https://github.com/tokio-rs/axum/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/tokio-rs/axum/compare/axum-v0.6.18...axum-v0.6.20)\r\n\r\nUpdates `postcard` from 1.0.6 to 1.0.7\r\n- [Release notes](https://github.com/jamesmunns/postcard/releases)\r\n- [Changelog](https://github.com/jamesmunns/postcard/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/jamesmunns/postcard/compare/v1.0.6...v1.0.7)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: proc-macro2\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: quote\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: syn\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: rustversion\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: trybuild\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: gloo-worker\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n  dependency-group: cargo-deps\r\n- dependency-name: serde\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: prettyplease\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: gloo\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n  dependency-group: cargo-deps\r\n- dependency-name: urlencoding\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: slab\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: thiserror\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: implicit-clone\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: tokio\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n  dependency-group: cargo-deps\r\n- dependency-name: jemallocator\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: average\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n  dependency-group: cargo-deps\r\n- dependency-name: tabled\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n  dependency-group: cargo-deps\r\n- dependency-name: indicatif\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: serde_json\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: clap\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n  dependency-group: cargo-deps\r\n- dependency-name: anyhow\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: chrono\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: git2\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n  dependency-group: cargo-deps\r\n- dependency-name: regex\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n  dependency-group: cargo-deps\r\n- dependency-name: reqwest\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: semver\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: gloo-net\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n  dependency-group: cargo-deps\r\n- dependency-name: base64\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: strum_macros\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: log\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: fake\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n  dependency-group: cargo-deps\r\n- dependency-name: time\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: uuid\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: bytes\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n  dependency-group: cargo-deps\r\n- dependency-name: axum\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: postcard\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\n* bless stderr files after syn update\r\n\r\n---------\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\r\nCo-authored-by: Muhammad Hamza <muhammadhamza1311@gmail.com>",
          "timestamp": "2023-09-23T12:57:06Z",
          "url": "https://github.com/yewstack/yew/commit/ca2aa2a4a6c0aa07bb636c68c0ffe07ba65804b0"
        },
        "date": 1695474125353,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Imbus",
            "username": "imbus64",
            "email": "66123528+imbus64@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0c802f80ea335222721ff05d8f7ef1aaf2e7ef4b",
          "message": "Documentation changes related to context code snippets (#3396)",
          "timestamp": "2023-09-23T13:03:48Z",
          "url": "https://github.com/yewstack/yew/commit/0c802f80ea335222721ff05d8f7ef1aaf2e7ef4b"
        },
        "date": 1695474461321,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Imbus",
            "username": "imbus64",
            "email": "66123528+imbus64@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0c802f80ea335222721ff05d8f7ef1aaf2e7ef4b",
          "message": "Documentation changes related to context code snippets (#3396)",
          "timestamp": "2023-09-23T13:03:48Z",
          "url": "https://github.com/yewstack/yew/commit/0c802f80ea335222721ff05d8f7ef1aaf2e7ef4b"
        },
        "date": 1695474908267,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "RazaGR",
            "username": "RazaGR",
            "email": "30994076+RazaGR@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5bab22da4a4386fa57182e9e7774ebdd2422661c",
          "message": "Add neovim configuration to docs (#3400)\n\n* add neovim configuration doc\r\n\r\nadd neovim configuration documentation to setup with lazy.vim plugin.\r\n\r\n* prettier\r\n\r\n---------\r\n\r\nCo-authored-by: Muhammad Hamza <muhammadhamza1311@gmail.com>",
          "timestamp": "2023-09-23T13:15:40Z",
          "url": "https://github.com/yewstack/yew/commit/5bab22da4a4386fa57182e9e7774ebdd2422661c"
        },
        "date": 1695474972673,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Muhammad Hamza",
            "username": "hamza1311",
            "email": "muhammadhamza1311@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "189a7296d14d2d64a5dc1e12566c263608d430dd",
          "message": "Remove unneded package-lock.json (#3411)",
          "timestamp": "2023-09-23T13:20:54Z",
          "url": "https://github.com/yewstack/yew/commit/189a7296d14d2d64a5dc1e12566c263608d430dd"
        },
        "date": 1695475257686,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Muhammad Hamza",
            "username": "hamza1311",
            "email": "muhammadhamza1311@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "189a7296d14d2d64a5dc1e12566c263608d430dd",
          "message": "Remove unneded package-lock.json (#3411)",
          "timestamp": "2023-09-23T13:20:54Z",
          "url": "https://github.com/yewstack/yew/commit/189a7296d14d2d64a5dc1e12566c263608d430dd"
        },
        "date": 1695476240512,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Muhammad Hamza",
            "username": "hamza1311",
            "email": "muhammadhamza1311@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5e823e729dd455be0d2b283511414d20b6826523",
          "message": "Prepare for 0.21 release (#3412)\n\n* Update CHANGELOG\r\n\r\nChangelog run: https://github.com/yewstack/yew/actions/runs/6283917852/job/17064800916\r\n\r\n* docusaurus docs:version 0.21\r\n\r\n* migration guide\r\n\r\n* blog post\r\n\r\n* prettier\r\n\r\n* make website warnings go away\r\n\r\n* make GA work\r\n\r\n* Apply suggestions from code review\r\n\r\n* Apply suggestion from review\r\n\r\nCo-authored-by: Kaede Hoshikawa <futursolo@users.noreply.github.com>\r\n\r\n* prettier\r\n\r\n---------\r\n\r\nCo-authored-by: Kaede Hoshikawa <futursolo@users.noreply.github.com>",
          "timestamp": "2023-09-29T10:10:07Z",
          "url": "https://github.com/yewstack/yew/commit/5e823e729dd455be0d2b283511414d20b6826523"
        },
        "date": 1695983256449,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GitHub Action",
            "username": "GitHub-Action",
            "email": "github-action@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub Action",
            "username": "GitHub-Action",
            "email": "github-action@users.noreply.github.com"
          },
          "id": "4c3bcdc692b067907fb0e9402a3c08b9f872bc0f",
          "message": "(cargo-release) version {{crate_name}}-v{{version}}",
          "timestamp": "2023-09-29T11:04:56Z",
          "url": "https://github.com/yewstack/yew/commit/4c3bcdc692b067907fb0e9402a3c08b9f872bc0f"
        },
        "date": 1695986800069,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tim Kurdov",
            "username": "schvv31n",
            "email": "tim.kurdov@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "753bafefdd2e8ef6c18ffc81fe216617c82c093b",
          "message": "Remove the dependency on `boolinator` (#3420)\n\n* removed boolinator from dependencies of yew-macro\r\n\r\n* removed boolinator from the dependencies of tools/website-test\r\n\r\n* fixed formatting\r\n\r\n* removed a lint fix",
          "timestamp": "2023-09-29T11:33:24Z",
          "url": "https://github.com/yewstack/yew/commit/753bafefdd2e8ef6c18ffc81fe216617c82c093b"
        },
        "date": 1695988161770,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tim Kurdov",
            "username": "schvv31n",
            "email": "tim.kurdov@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "753bafefdd2e8ef6c18ffc81fe216617c82c093b",
          "message": "Remove the dependency on `boolinator` (#3420)\n\n* removed boolinator from dependencies of yew-macro\r\n\r\n* removed boolinator from the dependencies of tools/website-test\r\n\r\n* fixed formatting\r\n\r\n* removed a lint fix",
          "timestamp": "2023-09-29T11:33:24Z",
          "url": "https://github.com/yewstack/yew/commit/753bafefdd2e8ef6c18ffc81fe216617c82c093b"
        },
        "date": 1695988202382,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Cecile Tonglet",
            "username": "cecton",
            "email": "cecile.tonglet@cecton.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "194a1e60594ce315a101b1dc36c58e967c37f37a",
          "message": "Add CallbackRef that takes ref in argument instead of value (#3419)\n\n* Add CallbackRef that takes ref in argument instead of value\r\n\r\n* Fix up commented reform/filter_reform\r\n\r\n* Add reform_ref functions to create CallbackRef instead\r\n\r\n* Use macro_rules to avoid code duplication\r\n\r\n* Add tests and fix wrong types\r\n\r\n* Update doc comments\r\n\r\n* clippy\r\n\r\n* more clippy\r\n\r\n---------\r\n\r\nCo-authored-by: KirillSemyonkin <burnytc@gmail.com>",
          "timestamp": "2023-09-29T11:58:24Z",
          "url": "https://github.com/yewstack/yew/commit/194a1e60594ce315a101b1dc36c58e967c37f37a"
        },
        "date": 1695989528344,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Cecile Tonglet",
            "username": "cecton",
            "email": "cecile.tonglet@cecton.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "194a1e60594ce315a101b1dc36c58e967c37f37a",
          "message": "Add CallbackRef that takes ref in argument instead of value (#3419)\n\n* Add CallbackRef that takes ref in argument instead of value\r\n\r\n* Fix up commented reform/filter_reform\r\n\r\n* Add reform_ref functions to create CallbackRef instead\r\n\r\n* Use macro_rules to avoid code duplication\r\n\r\n* Add tests and fix wrong types\r\n\r\n* Update doc comments\r\n\r\n* clippy\r\n\r\n* more clippy\r\n\r\n---------\r\n\r\nCo-authored-by: KirillSemyonkin <burnytc@gmail.com>",
          "timestamp": "2023-09-29T11:58:24Z",
          "url": "https://github.com/yewstack/yew/commit/194a1e60594ce315a101b1dc36c58e967c37f37a"
        },
        "date": 1695989747536,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Flavio Moreira",
            "username": "fdvmoreira",
            "email": "34199219+fdvmoreira@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "88c0af329b5de5dd95eda3ed45f2843a4c9cd443",
          "message": "Update children.mdx (#3418)\n\ncorrect typo",
          "timestamp": "2023-09-30T12:38:14Z",
          "url": "https://github.com/yewstack/yew/commit/88c0af329b5de5dd95eda3ed45f2843a4c9cd443"
        },
        "date": 1696077613551,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jupp56",
            "username": "Jupp56",
            "email": "kennichnicht100@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "28e673a4265053b27473313bca2b3c95ce735aab",
          "message": "Add safe mode to joke api (#3429)\n\n* Add safe mode to joke api\r\n\r\n* cargo fmt",
          "timestamp": "2023-10-02T10:20:14Z",
          "url": "https://github.com/yewstack/yew/commit/28e673a4265053b27473313bca2b3c95ce735aab"
        },
        "date": 1696242728369,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jupp56",
            "username": "Jupp56",
            "email": "kennichnicht100@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "28e673a4265053b27473313bca2b3c95ce735aab",
          "message": "Add safe mode to joke api (#3429)\n\n* Add safe mode to joke api\r\n\r\n* cargo fmt",
          "timestamp": "2023-10-02T10:20:14Z",
          "url": "https://github.com/yewstack/yew/commit/28e673a4265053b27473313bca2b3c95ce735aab"
        },
        "date": 1696243149971,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kaede Hoshikawa",
            "username": "futursolo",
            "email": "futursolo@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "013440d36abfab90414359e8266c5700498f4b54",
          "message": "Remove use of ChildrenRenderer from nested_list (#3436)\n\n* Remove ChildrenRenderer from nested_list.\r\n\r\n* Remove undeed conversion.",
          "timestamp": "2023-10-03T10:38:48Z",
          "url": "https://github.com/yewstack/yew/commit/013440d36abfab90414359e8266c5700498f4b54"
        },
        "date": 1696330623896,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Muhammad Hamza",
            "username": "hamza1311",
            "email": "muhammadhamza1311@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "22b3706d566b08f02f2be0d7099701ba6552f2f2",
          "message": "Add IntoPropValue impl for converting to VList (#3444)",
          "timestamp": "2023-10-05T10:28:43Z",
          "url": "https://github.com/yewstack/yew/commit/22b3706d566b08f02f2be0d7099701ba6552f2f2"
        },
        "date": 1696502327689,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Muhammad Hamza",
            "username": "hamza1311",
            "email": "muhammadhamza1311@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "22b3706d566b08f02f2be0d7099701ba6552f2f2",
          "message": "Add IntoPropValue impl for converting to VList (#3444)",
          "timestamp": "2023-10-05T10:28:43Z",
          "url": "https://github.com/yewstack/yew/commit/22b3706d566b08f02f2be0d7099701ba6552f2f2"
        },
        "date": 1696502884350,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jonathan Picques",
            "username": "JonathanPicques",
            "email": "jonathan.picques@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1bcd539f8faba1ed6939aa19fd0b63b01d7e1c78",
          "message": "Fix typo in introduction (#3448)",
          "timestamp": "2023-10-06T13:48:10Z",
          "url": "https://github.com/yewstack/yew/commit/1bcd539f8faba1ed6939aa19fd0b63b01d7e1c78"
        },
        "date": 1696600807865,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "da3f726f190ede25d4847ff3b6cc4c3e1e646799",
          "message": "Bump postcss from 8.4.21 to 8.4.31 in /website (#3446)\n\nBumps [postcss](https://github.com/postcss/postcss) from 8.4.21 to 8.4.31.\r\n- [Release notes](https://github.com/postcss/postcss/releases)\r\n- [Changelog](https://github.com/postcss/postcss/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/postcss/postcss/compare/8.4.21...8.4.31)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: postcss\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-10-06T14:07:18Z",
          "url": "https://github.com/yewstack/yew/commit/da3f726f190ede25d4847ff3b6cc4c3e1e646799"
        },
        "date": 1696602343480,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shihpin Tseng",
            "username": "deftsp",
            "email": "deftsp@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "04909dd942eb64285652d96a2621bdf7be3fa912",
          "message": "Agent: Avoiding clone of WorkerBridge and WorkerProviderState (#3435)\n\n* Agent V2: fix #3434 by avoiding clone of WorkerBridge\r\n\r\n* remove the Clone of WorkerProviderState",
          "timestamp": "2023-10-09T12:01:03Z",
          "url": "https://github.com/yewstack/yew/commit/04909dd942eb64285652d96a2621bdf7be3fa912"
        },
        "date": 1696853926497,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Muhammad Hamza",
            "username": "hamza1311",
            "email": "muhammadhamza1311@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c5e63d8c8e52e7c221cc8df3d001b56113a1b861",
          "message": "Jemalloc only works on *nix (#3474)",
          "timestamp": "2023-10-20T14:11:42Z",
          "url": "https://github.com/yewstack/yew/commit/c5e63d8c8e52e7c221cc8df3d001b56113a1b861"
        },
        "date": 1697812282943,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Cecile Tonglet",
            "username": "cecton",
            "email": "cecile.tonglet@cecton.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "22fd8550528c63730144415d29b1dcdebdf05165",
          "message": "Benchmark crate for core features (#3487)\n\n* Benchmark crate for core features\n\n* Fix incorrectly interpreted backticks\n\n* Add VSuspense node in benchmark",
          "timestamp": "2023-10-27T12:25:26Z",
          "url": "https://github.com/yewstack/yew/commit/22fd8550528c63730144415d29b1dcdebdf05165"
        },
        "date": 1698410550124,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Cecile Tonglet",
            "username": "cecton",
            "email": "cecile.tonglet@cecton.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ddb77bd6afd39aef7b65b80375600000f8f834a3",
          "message": "benchmark-core: fix wrong file name in workflow (#3491)",
          "timestamp": "2023-10-27T13:22:36Z",
          "url": "https://github.com/yewstack/yew/commit/ddb77bd6afd39aef7b65b80375600000f8f834a3"
        },
        "date": 1698414300496,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Cecile Tonglet",
            "username": "cecton",
            "email": "cecile.tonglet@cecton.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aa632344194ed565c0e8aeda6c8058a1fad69ee3",
          "message": "benchmark-core: fix huh wrong message (#3492)",
          "timestamp": "2023-10-27T15:02:28Z",
          "url": "https://github.com/yewstack/yew/commit/aa632344194ed565c0e8aeda6c8058a1fad69ee3"
        },
        "date": 1698420310046,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Cecile Tonglet",
            "username": "cecton",
            "email": "cecile.tonglet@cecton.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7f45af3a66acc2823d49b1968cc82b5f7d24e7e9",
          "message": "Make Html (VNode) cheap to clone (#3431)\n\n* Make VNode cheap to clone\r\n\r\n* Faster clone for list and portal\r\n\r\n* Fixes hopefully good\r\n\r\n* clippy\r\n\r\n* more fixes hopefully good\r\n\r\n* rustfmt\r\n\r\n* More fixes\r\n\r\n* more fixes...\r\n\r\n* more fixes\r\n\r\n* Update element-fail.stderr\r\n\r\n* Macro fixes...\r\n\r\n* CLEANUP\r\n\r\n* Benchmark with divan\r\n\r\n* WIP workflow\r\n\r\n* WIP\r\n\r\n* WIP\r\n\r\n* WIP\r\n\r\n* WIP\r\n\r\n* WIP\r\n\r\n* WIP\r\n\r\n* WIP\r\n\r\n* WIP\r\n\r\n* WIP\r\n\r\n* WIP\r\n\r\n* Use the 2 workflows approach, will fix after merge if not working\r\n\r\n* CLEANUP\r\n\r\n* can i push that change here pretty please\r\n\r\n* Trigger CI",
          "timestamp": "2023-10-27T16:43:03Z",
          "url": "https://github.com/yewstack/yew/commit/7f45af3a66acc2823d49b1968cc82b5f7d24e7e9"
        },
        "date": 1698426071166,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Muhammad Hamza",
            "username": "hamza1311",
            "email": "muhammadhamza1311@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0eb167ac78d85e785da62e974ccf9d7bc533038e",
          "message": "Remove ToHtml trait (#3453)\n\n* remove ToHtml trait\n\n* re-add display impls\n\n* make Vec::clone expilit\n\n* fix doc\n\n* fix conflicting impls\n\nInto<Html> and Display can't be implemented on the same type\n\n* update docs\n\n* blanket impl won't work here\n\n* bring back `Vec<VNode>: IntoPropValue<VNode>`\n\n* macro tests\n\n* Revert \"fix conflicting impls\"\n\nThis reverts commit 52f3c1fa8174489ba9cc783d708a49cc7b9c90a4.\nThese impls are fine now\n\n* make examples compile\n\n* .clone() should be before .into()\n\n* Rc VList\n\n* Make use of ImplicitClone and AttrValue in example\n\n(There is more work to do but it's complicated so I will do it in\nanother PR)\n\n* Impl ImplicitClone on VChild\n\n---------\n\nCo-authored-by: Cecile Tonglet <cecile.tonglet@cecton.com>",
          "timestamp": "2023-10-28T11:11:28Z",
          "url": "https://github.com/yewstack/yew/commit/0eb167ac78d85e785da62e974ccf9d7bc533038e"
        },
        "date": 1698492492549,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "40ed8a205df22dc88e1fd90235ac52b8b1c9a4af",
          "message": "Bump the cargo-deps group with 5 updates (#3490)\n\nBumps the cargo-deps group with 5 updates:\r\n\r\n| Package | From | To |\r\n| --- | --- | --- |\r\n| [serde](https://github.com/serde-rs/serde) | `1.0.189` | `1.0.190` |\r\n| [futures](https://github.com/rust-lang/futures-rs) | `0.3.28` | `0.3.29` |\r\n| [clap](https://github.com/clap-rs/clap) | `4.4.6` | `4.4.7` |\r\n| [base64](https://github.com/marshallpierce/rust-base64) | `0.21.4` | `0.21.5` |\r\n| [fake](https://github.com/cksac/fake-rs) | `2.8.0` | `2.9.1` |\r\n\r\n\r\nUpdates `serde` from 1.0.189 to 1.0.190\r\n- [Release notes](https://github.com/serde-rs/serde/releases)\r\n- [Commits](https://github.com/serde-rs/serde/compare/v1.0.189...v1.0.190)\r\n\r\nUpdates `futures` from 0.3.28 to 0.3.29\r\n- [Release notes](https://github.com/rust-lang/futures-rs/releases)\r\n- [Changelog](https://github.com/rust-lang/futures-rs/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/rust-lang/futures-rs/compare/0.3.28...0.3.29)\r\n\r\nUpdates `clap` from 4.4.6 to 4.4.7\r\n- [Release notes](https://github.com/clap-rs/clap/releases)\r\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/clap-rs/clap/compare/v4.4.6...v4.4.7)\r\n\r\nUpdates `base64` from 0.21.4 to 0.21.5\r\n- [Changelog](https://github.com/marshallpierce/rust-base64/blob/master/RELEASE-NOTES.md)\r\n- [Commits](https://github.com/marshallpierce/rust-base64/compare/v0.21.4...v0.21.5)\r\n\r\nUpdates `fake` from 2.8.0 to 2.9.1\r\n- [Commits](https://github.com/cksac/fake-rs/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: serde\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: futures\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: clap\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: base64\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: fake\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n  dependency-group: cargo-deps\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-10-28T15:45:06Z",
          "url": "https://github.com/yewstack/yew/commit/40ed8a205df22dc88e1fd90235ac52b8b1c9a4af"
        },
        "date": 1698508303165,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "40ed8a205df22dc88e1fd90235ac52b8b1c9a4af",
          "message": "Bump the cargo-deps group with 5 updates (#3490)\n\nBumps the cargo-deps group with 5 updates:\r\n\r\n| Package | From | To |\r\n| --- | --- | --- |\r\n| [serde](https://github.com/serde-rs/serde) | `1.0.189` | `1.0.190` |\r\n| [futures](https://github.com/rust-lang/futures-rs) | `0.3.28` | `0.3.29` |\r\n| [clap](https://github.com/clap-rs/clap) | `4.4.6` | `4.4.7` |\r\n| [base64](https://github.com/marshallpierce/rust-base64) | `0.21.4` | `0.21.5` |\r\n| [fake](https://github.com/cksac/fake-rs) | `2.8.0` | `2.9.1` |\r\n\r\n\r\nUpdates `serde` from 1.0.189 to 1.0.190\r\n- [Release notes](https://github.com/serde-rs/serde/releases)\r\n- [Commits](https://github.com/serde-rs/serde/compare/v1.0.189...v1.0.190)\r\n\r\nUpdates `futures` from 0.3.28 to 0.3.29\r\n- [Release notes](https://github.com/rust-lang/futures-rs/releases)\r\n- [Changelog](https://github.com/rust-lang/futures-rs/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/rust-lang/futures-rs/compare/0.3.28...0.3.29)\r\n\r\nUpdates `clap` from 4.4.6 to 4.4.7\r\n- [Release notes](https://github.com/clap-rs/clap/releases)\r\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/clap-rs/clap/compare/v4.4.6...v4.4.7)\r\n\r\nUpdates `base64` from 0.21.4 to 0.21.5\r\n- [Changelog](https://github.com/marshallpierce/rust-base64/blob/master/RELEASE-NOTES.md)\r\n- [Commits](https://github.com/marshallpierce/rust-base64/compare/v0.21.4...v0.21.5)\r\n\r\nUpdates `fake` from 2.8.0 to 2.9.1\r\n- [Commits](https://github.com/cksac/fake-rs/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: serde\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: futures\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: clap\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: base64\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: fake\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n  dependency-group: cargo-deps\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-10-28T15:45:06Z",
          "url": "https://github.com/yewstack/yew/commit/40ed8a205df22dc88e1fd90235ac52b8b1c9a4af"
        },
        "date": 1698508618284,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "40ed8a205df22dc88e1fd90235ac52b8b1c9a4af",
          "message": "Bump the cargo-deps group with 5 updates (#3490)\n\nBumps the cargo-deps group with 5 updates:\r\n\r\n| Package | From | To |\r\n| --- | --- | --- |\r\n| [serde](https://github.com/serde-rs/serde) | `1.0.189` | `1.0.190` |\r\n| [futures](https://github.com/rust-lang/futures-rs) | `0.3.28` | `0.3.29` |\r\n| [clap](https://github.com/clap-rs/clap) | `4.4.6` | `4.4.7` |\r\n| [base64](https://github.com/marshallpierce/rust-base64) | `0.21.4` | `0.21.5` |\r\n| [fake](https://github.com/cksac/fake-rs) | `2.8.0` | `2.9.1` |\r\n\r\n\r\nUpdates `serde` from 1.0.189 to 1.0.190\r\n- [Release notes](https://github.com/serde-rs/serde/releases)\r\n- [Commits](https://github.com/serde-rs/serde/compare/v1.0.189...v1.0.190)\r\n\r\nUpdates `futures` from 0.3.28 to 0.3.29\r\n- [Release notes](https://github.com/rust-lang/futures-rs/releases)\r\n- [Changelog](https://github.com/rust-lang/futures-rs/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/rust-lang/futures-rs/compare/0.3.28...0.3.29)\r\n\r\nUpdates `clap` from 4.4.6 to 4.4.7\r\n- [Release notes](https://github.com/clap-rs/clap/releases)\r\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/clap-rs/clap/compare/v4.4.6...v4.4.7)\r\n\r\nUpdates `base64` from 0.21.4 to 0.21.5\r\n- [Changelog](https://github.com/marshallpierce/rust-base64/blob/master/RELEASE-NOTES.md)\r\n- [Commits](https://github.com/marshallpierce/rust-base64/compare/v0.21.4...v0.21.5)\r\n\r\nUpdates `fake` from 2.8.0 to 2.9.1\r\n- [Commits](https://github.com/cksac/fake-rs/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: serde\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: futures\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: clap\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: base64\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: fake\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n  dependency-group: cargo-deps\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-10-28T15:45:06Z",
          "url": "https://github.com/yewstack/yew/commit/40ed8a205df22dc88e1fd90235ac52b8b1c9a4af"
        },
        "date": 1698508955900,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "915000572ca97ab6adb3838f35b0844e0042d4f0",
          "message": "Bump actions/setup-node from 3 to 4 (#3502)\n\nBumps [actions/setup-node](https://github.com/actions/setup-node) from 3 to 4.\r\n- [Release notes](https://github.com/actions/setup-node/releases)\r\n- [Commits](https://github.com/actions/setup-node/compare/v3...v4)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: actions/setup-node\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-11-02T16:33:48Z",
          "url": "https://github.com/yewstack/yew/commit/915000572ca97ab6adb3838f35b0844e0042d4f0"
        },
        "date": 1698943821626,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "915000572ca97ab6adb3838f35b0844e0042d4f0",
          "message": "Bump actions/setup-node from 3 to 4 (#3502)\n\nBumps [actions/setup-node](https://github.com/actions/setup-node) from 3 to 4.\r\n- [Release notes](https://github.com/actions/setup-node/releases)\r\n- [Commits](https://github.com/actions/setup-node/compare/v3...v4)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: actions/setup-node\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-11-02T16:33:48Z",
          "url": "https://github.com/yewstack/yew/commit/915000572ca97ab6adb3838f35b0844e0042d4f0"
        },
        "date": 1698943849224,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tim Kurdov",
            "username": "schvv31n",
            "email": "tim.kurdov@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8d2cfdee69fa69625d36ca784a0644e5dd0d5334",
          "message": "add the methods and From impls (#3519)",
          "timestamp": "2023-11-05T12:32:04Z",
          "url": "https://github.com/yewstack/yew/commit/8d2cfdee69fa69625d36ca784a0644e5dd0d5334"
        },
        "date": 1699188298654,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tim Kurdov",
            "username": "schvv31n",
            "email": "tim.kurdov@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8d2cfdee69fa69625d36ca784a0644e5dd0d5334",
          "message": "add the methods and From impls (#3519)",
          "timestamp": "2023-11-05T12:32:04Z",
          "url": "https://github.com/yewstack/yew/commit/8d2cfdee69fa69625d36ca784a0644e5dd0d5334"
        },
        "date": 1699188887532,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.19.3-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.19.3-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.20.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Cecile Tonglet",
            "username": "cecton",
            "email": "cecile.tonglet@cecton.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b25703a035c698f2b88b2b5e087922b3af529ac7",
          "message": "Add yew-autoprops to website documentation (#3505)",
          "timestamp": "2023-12-22T07:06:27Z",
          "url": "https://github.com/yewstack/yew/commit/b25703a035c698f2b88b2b5e087922b3af529ac7"
        },
        "date": 1703229714043,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.21.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 41_size-uncompressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 42_size-compressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 43_first-paint",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 41_size-uncompressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 42_size-compressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 43_first-paint",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yann Dirson",
            "username": "ydirson",
            "email": "ydirson@free.fr"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "16f26d82e75d17dc24e909140828366a1d6aac6b",
          "message": "use_state: fix/clarify docstring (#3570)\n\nSigned-off-by: Yann Dirson <ydirson@free.fr>",
          "timestamp": "2023-12-23T10:07:29Z",
          "url": "https://github.com/yewstack/yew/commit/16f26d82e75d17dc24e909140828366a1d6aac6b"
        },
        "date": 1703326962760,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.21.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 41_size-uncompressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 42_size-compressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 43_first-paint",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 41_size-uncompressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 42_size-compressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 43_first-paint",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f6b23f08284dec949efaf860fbe8e9198e3d0bed",
          "message": "Bump openssl from 0.10.55 to 0.10.60 (#3545)\n\nBumps [openssl](https://github.com/sfackler/rust-openssl) from 0.10.55 to 0.10.60.\r\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\r\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.55...openssl-v0.10.60)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: openssl\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-04T14:32:06Z",
          "url": "https://github.com/yewstack/yew/commit/f6b23f08284dec949efaf860fbe8e9198e3d0bed"
        },
        "date": 1704379692732,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.21.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 41_size-uncompressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 42_size-compressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 43_first-paint",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 34_startup-totalbytes",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 41_size-uncompressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 42_size-compressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 43_first-paint",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d0419a278dc126af4556c9afae2ef6b00b5fef36",
          "message": "Bump libgit2-sys from 0.16.1+1.7.1 to 0.16.2+1.7.2 (#3602)\n\nBumps [libgit2-sys](https://github.com/rust-lang/git2-rs) from 0.16.1+1.7.1 to 0.16.2+1.7.2.\r\n- [Changelog](https://github.com/rust-lang/git2-rs/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/rust-lang/git2-rs/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: libgit2-sys\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-14T11:52:20Z",
          "url": "https://github.com/yewstack/yew/commit/d0419a278dc126af4556c9afae2ef6b00b5fef36"
        },
        "date": 1707912506874,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.21.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 34_startup-interactive",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 41_size-uncompressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 42_size-compressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 43_first-paint",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 31_startup-ci",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 32_startup-bt",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 33_startup-mainthreadcost",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 34_startup-interactive",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 41_size-uncompressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 42_size-compressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 43_first-paint",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "46ebdc8d4bf4ce12befbe6e19776d3adbd95a14e",
          "message": "Bump mio from 0.8.8 to 0.8.11 (#3624)\n\nBumps [mio](https://github.com/tokio-rs/mio) from 0.8.8 to 0.8.11.\r\n- [Release notes](https://github.com/tokio-rs/mio/releases)\r\n- [Changelog](https://github.com/tokio-rs/mio/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/tokio-rs/mio/compare/v0.8.8...v0.8.11)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: mio\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-05T07:44:05Z",
          "url": "https://github.com/yewstack/yew/commit/46ebdc8d4bf4ce12befbe6e19776d3adbd95a14e"
        },
        "date": 1709625531925,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.21.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 41_size-uncompressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 42_size-compressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 43_first-paint",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 41_size-uncompressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 42_size-compressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 43_first-paint",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "WorldSEnder",
            "username": "WorldSEnder",
            "email": "WorldSEnder@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "95c29cc6848f5397d4f8cb95267bead446e1047c",
          "message": "Fix: Hydratation of empty lists next to components. (#3630)\n\n* fix: hydration of empty VLists\n\nan additional (empty) VText was inserted in the second reconciliation\npass, which tried to insert itself in an invalid position. This internal\nerror was masked by a \"fix\" of the internal slot of components, which\nshould have still been trapped to signal that the second fixup render\nwas not yet run.\n\n* fixup: new lints from clippy",
          "timestamp": "2024-03-12T13:25:11Z",
          "url": "https://github.com/yewstack/yew/commit/95c29cc6848f5397d4f8cb95267bead446e1047c"
        },
        "date": 1710250827283,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.21.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 41_size-uncompressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 42_size-compressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 43_first-paint",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 41_size-uncompressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 42_size-compressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 43_first-paint",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Meyer",
            "username": "Ichmed",
            "email": "mijomeyer@t-online.de"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e9739fc9ce4944ba93c77a32072551ab771a2cda",
          "message": "Add generic type hints to boxed hooks (#3633)\n\nWhen using complex type constructs in a boxed hook, the compiler could get confused and request a type hint on the call to the inner function.  This adds all generic types of the outer hook function as explicit arguments to the call of the inner function.\r\n\r\n* Add generic types to boxed hooks\r\n* Create failing test\r\n\r\n---------\r\n\r\nCo-authored-by: Michael Meyer <ichmed95@gmail.com>",
          "timestamp": "2024-03-14T11:24:20Z",
          "url": "https://github.com/yewstack/yew/commit/e9739fc9ce4944ba93c77a32072551ab771a2cda"
        },
        "date": 1710416360791,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.21.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 41_size-uncompressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 42_size-compressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 43_first-paint",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 01_run1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 02_replace1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 03_update10th1k_x16",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 04_select1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 05_swap1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 06_remove-one-1k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 07_create10k",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 09_clear1k_x8",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 21_ready-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 22_run-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 23_update5-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 25_run-clear-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 26_run-10k-memory",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 41_size-uncompressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 42_size-compressed",
            "value": "null",
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 43_first-paint",
            "value": "null",
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "WorldSEnder",
            "username": "WorldSEnder",
            "email": "WorldSEnder@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "387141817467291af1b5e13dd514fcb3ee542351",
          "message": "Modernize github workflows (#3711)\n\n* modernize github workflows\r\n\r\nthis mainly fixes some inconsistencies in style, outdated or wrong comments and action version\r\n- replace Legit-Labs/action-download-artifact with actions/download-artifact\r\n- fix Swatinem/rust-cache arguments\r\n- fix benchmark transformations\r\n- expand feature soundness lints\r\n- wording and capitalization in comments\r\n\r\n* fix no_run on crate level doc\r\n\r\n* fix some more small issues",
          "timestamp": "2024-08-22T15:04:04Z",
          "url": "https://github.com/yewstack/yew/commit/387141817467291af1b5e13dd514fcb3ee542351"
        },
        "date": 1724340087610,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.21.0-keyed 01_run1k",
            "value": 194.1,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 02_replace1k",
            "value": 220.2,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 03_update10th1k_x16",
            "value": 92.8,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 04_select1k",
            "value": 39.4,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 05_swap1k",
            "value": 101.8,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 06_remove-one-1k",
            "value": 78.4,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 07_create10k",
            "value": 2198.9,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": 229.2,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 09_clear1k_x8",
            "value": 89.3,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 21_ready-memory",
            "value": 2.1001195907592773,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 22_run-memory",
            "value": 6.286437034606934,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 23_update5-memory",
            "value": 6.589423179626465,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 25_run-clear-memory",
            "value": 5.142463684082031,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 26_run-10k-memory",
            "value": 42.82300853729248,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 41_size-uncompressed",
            "value": 165.4,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 42_size-compressed",
            "value": 54,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 43_first-paint",
            "value": 452.8,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 01_run1k",
            "value": 192,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 02_replace1k",
            "value": 220.6,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 03_update10th1k_x16",
            "value": 72.6,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 04_select1k",
            "value": 17.1,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 05_swap1k",
            "value": 79.5,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 06_remove-one-1k",
            "value": 65,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 07_create10k",
            "value": 2192.6,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": 218.3,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 09_clear1k_x8",
            "value": 83.1,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 21_ready-memory",
            "value": 2.1274728775024414,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 22_run-memory",
            "value": 6.2219438552856445,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 23_update5-memory",
            "value": 6.343278884887695,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 25_run-clear-memory",
            "value": 4.867067337036133,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 26_run-10k-memory",
            "value": 41.55056095123291,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 41_size-uncompressed",
            "value": 163,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 42_size-compressed",
            "value": 53.7,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 43_first-paint",
            "value": 459.7,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aa211192a9a6d5edccc3db13d36756d2cbc2a0bf",
          "message": "Bump the cargo-deps group across 1 directory with 23 updates (#3713)\n\n* Bump the cargo-deps group across 1 directory with 23 updates\r\n\r\nBumps the cargo-deps group with 20 updates in the / directory:\r\n\r\n| Package | From | To |\r\n| --- | --- | --- |\r\n| [indexmap](https://github.com/indexmap-rs/indexmap) | `2.3.0` | `2.4.0` |\r\n| [js-sys](https://github.com/rustwasm/wasm-bindgen) | `0.3.69` | `0.3.70` |\r\n| [thiserror](https://github.com/dtolnay/thiserror) | `1.0.55` | `1.0.63` |\r\n| [serde](https://github.com/serde-rs/serde) | `1.0.193` | `1.0.208` |\r\n| [web-sys](https://github.com/rustwasm/wasm-bindgen) | `0.3.69` | `0.3.70` |\r\n| [wasm-bindgen-futures](https://github.com/rustwasm/wasm-bindgen) | `0.4.42` | `0.4.43` |\r\n| [wasm-bindgen-test](https://github.com/rustwasm/wasm-bindgen) | `0.3.42` | `0.3.43` |\r\n| [trybuild](https://github.com/dtolnay/trybuild) | `1.0.86` | `1.0.99` |\r\n| [syn](https://github.com/dtolnay/syn) | `2.0.72` | `2.0.75` |\r\n| [getrandom](https://github.com/rust-random/getrandom) | `0.2.14` | `0.2.15` |\r\n| [tabled](https://github.com/zhiburt/tabled) | `0.15.0` | `0.16.0` |\r\n| [clap](https://github.com/clap-rs/clap) | `4.5.13` | `4.5.16` |\r\n| [reqwest](https://github.com/seanmonstar/reqwest) | `0.12.5` | `0.12.7` |\r\n| [derive_more](https://github.com/JelteF/derive_more) | `0.99.18` | `1.0.0` |\r\n| [gloo-net](https://github.com/rustwasm/gloo) | `0.5.0` | `0.6.0` |\r\n| [pulldown-cmark](https://github.com/raphlinus/pulldown-cmark) | `0.9.6` | `0.12.0` |\r\n| [hyper-util](https://github.com/hyperium/hyper-util) | `0.1.6` | `0.1.7` |\r\n| [tower](https://github.com/tower-rs/tower) | `0.4.13` | `0.5.0` |\r\n| [env_logger](https://github.com/rust-cli/env_logger) | `0.10.2` | `0.11.5` |\r\n| [postcard](https://github.com/jamesmunns/postcard) | `1.0.8` | `1.0.10` |\r\n\r\n\r\n\r\nUpdates `indexmap` from 2.3.0 to 2.4.0\r\n- [Changelog](https://github.com/indexmap-rs/indexmap/blob/master/RELEASES.md)\r\n- [Commits](https://github.com/indexmap-rs/indexmap/compare/2.3.0...2.4.0)\r\n\r\nUpdates `js-sys` from 0.3.69 to 0.3.70\r\n- [Release notes](https://github.com/rustwasm/wasm-bindgen/releases)\r\n- [Changelog](https://github.com/rustwasm/wasm-bindgen/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/rustwasm/wasm-bindgen/commits)\r\n\r\nUpdates `wasm-bindgen` from 0.2.92 to 0.2.93\r\n- [Release notes](https://github.com/rustwasm/wasm-bindgen/releases)\r\n- [Changelog](https://github.com/rustwasm/wasm-bindgen/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/rustwasm/wasm-bindgen/compare/0.2.92...0.2.93)\r\n\r\nUpdates `thiserror` from 1.0.55 to 1.0.63\r\n- [Release notes](https://github.com/dtolnay/thiserror/releases)\r\n- [Commits](https://github.com/dtolnay/thiserror/compare/1.0.55...1.0.63)\r\n\r\nUpdates `serde` from 1.0.193 to 1.0.208\r\n- [Release notes](https://github.com/serde-rs/serde/releases)\r\n- [Commits](https://github.com/serde-rs/serde/compare/v1.0.193...v1.0.208)\r\n\r\nUpdates `web-sys` from 0.3.69 to 0.3.70\r\n- [Release notes](https://github.com/rustwasm/wasm-bindgen/releases)\r\n- [Changelog](https://github.com/rustwasm/wasm-bindgen/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/rustwasm/wasm-bindgen/commits)\r\n\r\nUpdates `wasm-bindgen-futures` from 0.4.42 to 0.4.43\r\n- [Release notes](https://github.com/rustwasm/wasm-bindgen/releases)\r\n- [Changelog](https://github.com/rustwasm/wasm-bindgen/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/rustwasm/wasm-bindgen/commits)\r\n\r\nUpdates `wasm-bindgen-test` from 0.3.42 to 0.3.43\r\n- [Release notes](https://github.com/rustwasm/wasm-bindgen/releases)\r\n- [Changelog](https://github.com/rustwasm/wasm-bindgen/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/rustwasm/wasm-bindgen/commits)\r\n\r\nUpdates `trybuild` from 1.0.86 to 1.0.99\r\n- [Release notes](https://github.com/dtolnay/trybuild/releases)\r\n- [Commits](https://github.com/dtolnay/trybuild/compare/1.0.86...1.0.99)\r\n\r\nUpdates `syn` from 2.0.72 to 2.0.75\r\n- [Release notes](https://github.com/dtolnay/syn/releases)\r\n- [Commits](https://github.com/dtolnay/syn/compare/2.0.72...2.0.75)\r\n\r\nUpdates `getrandom` from 0.2.14 to 0.2.15\r\n- [Changelog](https://github.com/rust-random/getrandom/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/rust-random/getrandom/compare/v0.2.14...v0.2.15)\r\n\r\nUpdates `tabled` from 0.15.0 to 0.16.0\r\n- [Changelog](https://github.com/zhiburt/tabled/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/zhiburt/tabled/commits)\r\n\r\nUpdates `serde_json` from 1.0.109 to 1.0.125\r\n- [Release notes](https://github.com/serde-rs/json/releases)\r\n- [Commits](https://github.com/serde-rs/json/compare/v1.0.109...1.0.125)\r\n\r\nUpdates `clap` from 4.5.13 to 4.5.16\r\n- [Release notes](https://github.com/clap-rs/clap/releases)\r\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.13...clap_complete-v4.5.16)\r\n\r\nUpdates `reqwest` from 0.12.5 to 0.12.7\r\n- [Release notes](https://github.com/seanmonstar/reqwest/releases)\r\n- [Changelog](https://github.com/seanmonstar/reqwest/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/seanmonstar/reqwest/compare/v0.12.5...v0.12.7)\r\n\r\nUpdates `derive_more` from 0.99.18 to 1.0.0\r\n- [Release notes](https://github.com/JelteF/derive_more/releases)\r\n- [Changelog](https://github.com/JelteF/derive_more/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/JelteF/derive_more/compare/v0.99.18...v1.0.0)\r\n\r\nUpdates `gloo-net` from 0.5.0 to 0.6.0\r\n- [Release notes](https://github.com/rustwasm/gloo/releases)\r\n- [Changelog](https://github.com/rustwasm/gloo/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/rustwasm/gloo/compare/0.5.0...0.6.0)\r\n\r\nUpdates `pulldown-cmark` from 0.9.6 to 0.12.0\r\n- [Release notes](https://github.com/raphlinus/pulldown-cmark/releases)\r\n- [Commits](https://github.com/raphlinus/pulldown-cmark/compare/v0.9.6...v0.12.0)\r\n\r\nUpdates `hyper-util` from 0.1.6 to 0.1.7\r\n- [Release notes](https://github.com/hyperium/hyper-util/releases)\r\n- [Changelog](https://github.com/hyperium/hyper-util/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/hyperium/hyper-util/compare/v0.1.6...v0.1.7)\r\n\r\nUpdates `tower` from 0.4.13 to 0.5.0\r\n- [Release notes](https://github.com/tower-rs/tower/releases)\r\n- [Commits](https://github.com/tower-rs/tower/compare/tower-0.4.13...tower-0.5.0)\r\n\r\nUpdates `env_logger` from 0.10.2 to 0.11.5\r\n- [Release notes](https://github.com/rust-cli/env_logger/releases)\r\n- [Changelog](https://github.com/rust-cli/env_logger/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/rust-cli/env_logger/compare/v0.10.2...v0.11.5)\r\n\r\nUpdates `serde_derive` from 1.0.193 to 1.0.208\r\n- [Release notes](https://github.com/serde-rs/serde/releases)\r\n- [Commits](https://github.com/serde-rs/serde/compare/v1.0.193...v1.0.208)\r\n\r\nUpdates `postcard` from 1.0.8 to 1.0.10\r\n- [Release notes](https://github.com/jamesmunns/postcard/releases)\r\n- [Changelog](https://github.com/jamesmunns/postcard/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/jamesmunns/postcard/compare/v1.0.8...v1.0.10)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: indexmap\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n  dependency-group: cargo-deps\r\n- dependency-name: js-sys\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: wasm-bindgen\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: thiserror\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: serde\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: web-sys\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: wasm-bindgen-futures\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: wasm-bindgen-test\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: trybuild\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: syn\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: getrandom\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: tabled\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n  dependency-group: cargo-deps\r\n- dependency-name: serde_json\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: clap\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: reqwest\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: derive_more\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n  dependency-group: cargo-deps\r\n- dependency-name: gloo-net\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n  dependency-group: cargo-deps\r\n- dependency-name: pulldown-cmark\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n  dependency-group: cargo-deps\r\n- dependency-name: hyper-util\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: tower\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n  dependency-group: cargo-deps\r\n- dependency-name: env_logger\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n  dependency-group: cargo-deps\r\n- dependency-name: serde_derive\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: postcard\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\n* fix markup parsing\r\n\r\n* update web_sys bindings to non-deprecated\r\n\r\n* fix formatting\r\n\r\n* fix feature set for derive_more\r\n\r\n* update lock file to work around tower-rs/tower#784\r\n\r\n---------\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\r\nCo-authored-by: Martin Molzer <WorldSEnder@users.noreply.github.com>",
          "timestamp": "2024-08-22T21:31:58Z",
          "url": "https://github.com/yewstack/yew/commit/aa211192a9a6d5edccc3db13d36756d2cbc2a0bf"
        },
        "date": 1724363357813,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.21.0-keyed 01_run1k",
            "value": 194.6,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 02_replace1k",
            "value": 215,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 03_update10th1k_x16",
            "value": 90.9,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 04_select1k",
            "value": 38.7,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 05_swap1k",
            "value": 105,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 06_remove-one-1k",
            "value": 80.9,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 07_create10k",
            "value": 2223.1,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": 234.1,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 09_clear1k_x8",
            "value": 87.5,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 21_ready-memory",
            "value": 2.08194351196289,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 22_run-memory",
            "value": 6.311489105224609,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 23_update5-memory",
            "value": 6.596413612365723,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 25_run-clear-memory",
            "value": 5.168736457824707,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 26_run-10k-memory",
            "value": 42.82847213745117,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 41_size-uncompressed",
            "value": 168.4,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 42_size-compressed",
            "value": 54.6,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 43_first-paint",
            "value": 464.6,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 01_run1k",
            "value": 199.1,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 02_replace1k",
            "value": 221.2,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 03_update10th1k_x16",
            "value": 71.7,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 04_select1k",
            "value": 17.1,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 05_swap1k",
            "value": 89.7,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 06_remove-one-1k",
            "value": 65.2,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 07_create10k",
            "value": 2181.8,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": 221.8,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 09_clear1k_x8",
            "value": 83.2,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 21_ready-memory",
            "value": 2.1210689544677734,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 22_run-memory",
            "value": 6.219568252563477,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 23_update5-memory",
            "value": 6.362386703491211,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 25_run-clear-memory",
            "value": 4.960691452026367,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 26_run-10k-memory",
            "value": 41.536179542541504,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 41_size-uncompressed",
            "value": 166.1,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 42_size-compressed",
            "value": 54.3,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 43_first-paint",
            "value": 443.7,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "WorldSEnder",
            "username": "WorldSEnder",
            "email": "WorldSEnder@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aecde4bf63e273fe304612ed8da555a1c25153ff",
          "message": "Provide reference ref for benchmark action and make it less spammy (#3716)\n\n* provide reference ref for benchmark action\r\n\r\nit's apparently not possible to also provide a PR number for the comment\r\nto target, since that is automically determined by the action (and wrong\r\nfor workflow_run workflows)\r\n\r\nSee also: benchmark-action/github-action-benchmark#250\r\n\r\n* guard benchmark action with performance label again\r\n\r\nThis check was removed in #2774 for simplicity, bring it back to spam less",
          "timestamp": "2024-08-23T13:53:59Z",
          "url": "https://github.com/yewstack/yew/commit/aecde4bf63e273fe304612ed8da555a1c25153ff"
        },
        "date": 1724422223015,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.21.0-keyed 01_run1k",
            "value": 190.4,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 02_replace1k",
            "value": 215.1,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 03_update10th1k_x16",
            "value": 89.9,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 04_select1k",
            "value": 37.5,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 05_swap1k",
            "value": 97.8,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 06_remove-one-1k",
            "value": 74.1,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 07_create10k",
            "value": 2172.3,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": 221.9,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 09_clear1k_x8",
            "value": 82.3,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 21_ready-memory",
            "value": 2.148773193359375,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 22_run-memory",
            "value": 6.287147521972656,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 23_update5-memory",
            "value": 6.545445442199707,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 25_run-clear-memory",
            "value": 5.162281036376953,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 26_run-10k-memory",
            "value": 42.82865524291992,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 41_size-uncompressed",
            "value": 168.4,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 42_size-compressed",
            "value": 54.6,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 43_first-paint",
            "value": 419.9,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 01_run1k",
            "value": 192.8,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 02_replace1k",
            "value": 215.9,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 03_update10th1k_x16",
            "value": 65.3,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 04_select1k",
            "value": 15.8,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 05_swap1k",
            "value": 74.6,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 06_remove-one-1k",
            "value": 63.5,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 07_create10k",
            "value": 2192.1,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": 216.2,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 09_clear1k_x8",
            "value": 81.2,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 21_ready-memory",
            "value": 2.120767593383789,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 22_run-memory",
            "value": 6.180402755737305,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 23_update5-memory",
            "value": 6.320826530456543,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 25_run-clear-memory",
            "value": 5.010980606079102,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 26_run-10k-memory",
            "value": 41.578298568725586,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 41_size-uncompressed",
            "value": 166.1,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 42_size-compressed",
            "value": 54.3,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 43_first-paint",
            "value": 427.1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c0c8963f2f2cf915fbbcfc04e5925d1af067a46d",
          "message": "Bump quote from 1.0.36 to 1.0.37 in the cargo-deps group (#3714)\n\nBumps the cargo-deps group with 1 update: [quote](https://github.com/dtolnay/quote).\r\n\r\n\r\nUpdates `quote` from 1.0.36 to 1.0.37\r\n- [Release notes](https://github.com/dtolnay/quote/releases)\r\n- [Commits](https://github.com/dtolnay/quote/compare/1.0.36...1.0.37)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: quote\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-23T14:59:18Z",
          "url": "https://github.com/yewstack/yew/commit/c0c8963f2f2cf915fbbcfc04e5925d1af067a46d"
        },
        "date": 1724426209997,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.21.0-keyed 01_run1k",
            "value": 204.5,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 02_replace1k",
            "value": 231.9,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 03_update10th1k_x16",
            "value": 100.7,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 04_select1k",
            "value": 43.4,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 05_swap1k",
            "value": 107.9,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 06_remove-one-1k",
            "value": 82.7,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 07_create10k",
            "value": 2223.4,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": 238.1,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 09_clear1k_x8",
            "value": 91.7,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 21_ready-memory",
            "value": 2.1027097702026367,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 22_run-memory",
            "value": 6.311305999755859,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 23_update5-memory",
            "value": 6.613293647766113,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 25_run-clear-memory",
            "value": 5.1480560302734375,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 26_run-10k-memory",
            "value": 42.78655529022217,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 41_size-uncompressed",
            "value": 167.5,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 42_size-compressed",
            "value": 54.4,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 43_first-paint",
            "value": 441,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 01_run1k",
            "value": 208.7,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 02_replace1k",
            "value": 235.5,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 03_update10th1k_x16",
            "value": 81.1,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 04_select1k",
            "value": 19.1,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 05_swap1k",
            "value": 92.2,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 06_remove-one-1k",
            "value": 79.2,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 07_create10k",
            "value": 2283.7,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": 239.2,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 09_clear1k_x8",
            "value": 90,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 21_ready-memory",
            "value": 2.1206188201904297,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 22_run-memory",
            "value": 6.247907638549805,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 23_update5-memory",
            "value": 6.307622909545898,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 25_run-clear-memory",
            "value": 4.918656349182129,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 26_run-10k-memory",
            "value": 41.57816982269287,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 41_size-uncompressed",
            "value": 165.2,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 42_size-compressed",
            "value": 54.2,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 43_first-paint",
            "value": 435.4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2e3a0c37a45378bae83649487299bdc05e799882",
          "message": "Bump oleksiyrudenko/gha-git-credentials from 2.1.1 to 2.1.2 (#3696)\n\nBumps [oleksiyrudenko/gha-git-credentials](https://github.com/oleksiyrudenko/gha-git-credentials) from 2.1.1 to 2.1.2.\r\n- [Release notes](https://github.com/oleksiyrudenko/gha-git-credentials/releases)\r\n- [Changelog](https://github.com/OleksiyRudenko/gha-git-credentials/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/oleksiyrudenko/gha-git-credentials/compare/v2.1.1...v2.1.2)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: oleksiyrudenko/gha-git-credentials\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-23T16:32:19Z",
          "url": "https://github.com/yewstack/yew/commit/2e3a0c37a45378bae83649487299bdc05e799882"
        },
        "date": 1724431710286,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.21.0-keyed 01_run1k",
            "value": 192.9,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 02_replace1k",
            "value": 219.4,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 03_update10th1k_x16",
            "value": 90.2,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 04_select1k",
            "value": 37.5,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 05_swap1k",
            "value": 98.2,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 06_remove-one-1k",
            "value": 76.6,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 07_create10k",
            "value": 2195.4,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": 227.8,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 09_clear1k_x8",
            "value": 89.4,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 21_ready-memory",
            "value": 2.1522865295410156,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 22_run-memory",
            "value": 6.311305999755859,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 23_update5-memory",
            "value": 6.524500846862793,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 25_run-clear-memory",
            "value": 5.187488555908203,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 26_run-10k-memory",
            "value": 42.808197021484375,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 41_size-uncompressed",
            "value": 167.5,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 42_size-compressed",
            "value": 54.4,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 43_first-paint",
            "value": 425.5,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 01_run1k",
            "value": 192.8,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 02_replace1k",
            "value": 218.2,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 03_update10th1k_x16",
            "value": 67.5,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 04_select1k",
            "value": 16.1,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 05_swap1k",
            "value": 79.1,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 06_remove-one-1k",
            "value": 69.3,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 07_create10k",
            "value": 2200.9,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": 222.7,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 09_clear1k_x8",
            "value": 88.1,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 21_ready-memory",
            "value": 2.120885848999023,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 22_run-memory",
            "value": 6.196981430053711,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 23_update5-memory",
            "value": 6.3451948165893555,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 25_run-clear-memory",
            "value": 4.9808759689331055,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 26_run-10k-memory",
            "value": 41.56104469299317,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 41_size-uncompressed",
            "value": 165.2,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 42_size-compressed",
            "value": 54.2,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 43_first-paint",
            "value": 423.3,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1ba7f0b66c2595ad182fc125cf3f0ed066cafd8e",
          "message": "Bump the cargo-deps group with 5 updates (#3717)\n\nBumps the cargo-deps group with 5 updates:\r\n\r\n| Package | From | To |\r\n| --- | --- | --- |\r\n| [serde](https://github.com/serde-rs/serde) | `1.0.208` | `1.0.209` |\r\n| [syn](https://github.com/dtolnay/syn) | `2.0.75` | `2.0.76` |\r\n| [prettyplease](https://github.com/dtolnay/prettyplease) | `0.2.20` | `0.2.22` |\r\n| [serde_json](https://github.com/serde-rs/json) | `1.0.125` | `1.0.127` |\r\n| [serde_derive](https://github.com/serde-rs/serde) | `1.0.208` | `1.0.209` |\r\n\r\n\r\nUpdates `serde` from 1.0.208 to 1.0.209\r\n- [Release notes](https://github.com/serde-rs/serde/releases)\r\n- [Commits](https://github.com/serde-rs/serde/compare/v1.0.208...v1.0.209)\r\n\r\nUpdates `syn` from 2.0.75 to 2.0.76\r\n- [Release notes](https://github.com/dtolnay/syn/releases)\r\n- [Commits](https://github.com/dtolnay/syn/compare/2.0.75...2.0.76)\r\n\r\nUpdates `prettyplease` from 0.2.20 to 0.2.22\r\n- [Release notes](https://github.com/dtolnay/prettyplease/releases)\r\n- [Commits](https://github.com/dtolnay/prettyplease/compare/0.2.20...0.2.22)\r\n\r\nUpdates `serde_json` from 1.0.125 to 1.0.127\r\n- [Release notes](https://github.com/serde-rs/json/releases)\r\n- [Commits](https://github.com/serde-rs/json/compare/1.0.125...1.0.127)\r\n\r\nUpdates `serde_derive` from 1.0.208 to 1.0.209\r\n- [Release notes](https://github.com/serde-rs/serde/releases)\r\n- [Commits](https://github.com/serde-rs/serde/compare/v1.0.208...v1.0.209)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: serde\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: syn\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: prettyplease\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: serde_json\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: serde_derive\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-30T15:03:14Z",
          "url": "https://github.com/yewstack/yew/commit/1ba7f0b66c2595ad182fc125cf3f0ed066cafd8e"
        },
        "date": 1725031209846,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.21.0-keyed 01_run1k",
            "value": 195.3,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 02_replace1k",
            "value": 216.1,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 03_update10th1k_x16",
            "value": 89.7,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 04_select1k",
            "value": 38.6,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 05_swap1k",
            "value": 103.7,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 06_remove-one-1k",
            "value": 74,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 07_create10k",
            "value": 2217.3,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": 225.4,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 09_clear1k_x8",
            "value": 81.1,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 21_ready-memory",
            "value": 2.12890625,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 22_run-memory",
            "value": 6.304313659667969,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 23_update5-memory",
            "value": 6.604645729064941,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 25_run-clear-memory",
            "value": 5.194225311279297,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 26_run-10k-memory",
            "value": 42.82180881500244,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 41_size-uncompressed",
            "value": 168.4,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 42_size-compressed",
            "value": 54.5,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 43_first-paint",
            "value": 416.1,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 01_run1k",
            "value": 195.3,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 02_replace1k",
            "value": 219,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 03_update10th1k_x16",
            "value": 68.8,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 04_select1k",
            "value": 16,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 05_swap1k",
            "value": 76.7,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 06_remove-one-1k",
            "value": 64,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 07_create10k",
            "value": 2214.1,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": 217.9,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 09_clear1k_x8",
            "value": 79.9,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 21_ready-memory",
            "value": 2.144918441772461,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 22_run-memory",
            "value": 6.191381454467773,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 23_update5-memory",
            "value": 6.353761672973633,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 25_run-clear-memory",
            "value": 4.956918716430664,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 26_run-10k-memory",
            "value": 41.550188064575195,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 41_size-uncompressed",
            "value": 166.1,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 42_size-compressed",
            "value": 54.3,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 43_first-paint",
            "value": 402.8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6481524369661b4a2217c99f1031ca504ebbc8c7",
          "message": "Bump jetli/trunk-action from 0.4.0 to 0.5.0 (#3722)\n\nBumps [jetli/trunk-action](https://github.com/jetli/trunk-action) from 0.4.0 to 0.5.0.\r\n- [Release notes](https://github.com/jetli/trunk-action/releases)\r\n- [Commits](https://github.com/jetli/trunk-action/compare/v0.4.0...v0.5.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: jetli/trunk-action\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-09-01T11:56:50Z",
          "url": "https://github.com/yewstack/yew/commit/6481524369661b4a2217c99f1031ca504ebbc8c7"
        },
        "date": 1725192807410,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.21.0-keyed 01_run1k",
            "value": 203.6,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 02_replace1k",
            "value": 232.6,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 03_update10th1k_x16",
            "value": 110.8,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 04_select1k",
            "value": 46.8,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 05_swap1k",
            "value": 121.7,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 06_remove-one-1k",
            "value": 80.1,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 07_create10k",
            "value": 2241.6,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": 235.4,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 09_clear1k_x8",
            "value": 90,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 21_ready-memory",
            "value": 2.125171661376953,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 22_run-memory",
            "value": 6.301815032958984,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 23_update5-memory",
            "value": 6.5852861404418945,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 25_run-clear-memory",
            "value": 5.175464630126953,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 26_run-10k-memory",
            "value": 42.78638553619385,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 41_size-uncompressed",
            "value": 168.4,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 42_size-compressed",
            "value": 54.5,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 43_first-paint",
            "value": 421.8,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 01_run1k",
            "value": 198,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 02_replace1k",
            "value": 226.4,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 03_update10th1k_x16",
            "value": 69.1,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 04_select1k",
            "value": 16.8,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 05_swap1k",
            "value": 79.7,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 06_remove-one-1k",
            "value": 64.6,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 07_create10k",
            "value": 2234.5,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": 233,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 09_clear1k_x8",
            "value": 86.6,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 21_ready-memory",
            "value": 2.1406383514404297,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 22_run-memory",
            "value": 6.188417434692383,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 23_update5-memory",
            "value": 6.351266860961914,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 25_run-clear-memory",
            "value": 4.987310409545898,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 26_run-10k-memory",
            "value": 41.522817611694336,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 41_size-uncompressed",
            "value": 166.1,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 42_size-compressed",
            "value": 54.3,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 43_first-paint",
            "value": 420.9,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "86c6c8a5dd609133b0224aae16f5ce398763b040",
          "message": "Bump softprops/action-gh-release from 1 to 2 (#3720)\n\nBumps [softprops/action-gh-release](https://github.com/softprops/action-gh-release) from 1 to 2.\r\n- [Release notes](https://github.com/softprops/action-gh-release/releases)\r\n- [Changelog](https://github.com/softprops/action-gh-release/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/softprops/action-gh-release/compare/v1...v2)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: softprops/action-gh-release\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-09-01T11:58:17Z",
          "url": "https://github.com/yewstack/yew/commit/86c6c8a5dd609133b0224aae16f5ce398763b040"
        },
        "date": 1725192928490,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.21.0-keyed 01_run1k",
            "value": 202.7,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 02_replace1k",
            "value": 227.5,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 03_update10th1k_x16",
            "value": 99.3,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 04_select1k",
            "value": 42.4,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 05_swap1k",
            "value": 108.8,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 06_remove-one-1k",
            "value": 81.6,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 07_create10k",
            "value": 2237.3,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": 239.6,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 09_clear1k_x8",
            "value": 91.2,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 21_ready-memory",
            "value": 2.140857696533203,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 22_run-memory",
            "value": 6.302089691162109,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 23_update5-memory",
            "value": 6.602245330810547,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 25_run-clear-memory",
            "value": 5.143494606018066,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 26_run-10k-memory",
            "value": 42.75127410888672,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 41_size-uncompressed",
            "value": 168.4,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 42_size-compressed",
            "value": 54.5,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 43_first-paint",
            "value": 424.7,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 01_run1k",
            "value": 201.6,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 02_replace1k",
            "value": 226.3,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 03_update10th1k_x16",
            "value": 76.8,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 04_select1k",
            "value": 18.5,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 05_swap1k",
            "value": 84.3,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 06_remove-one-1k",
            "value": 72.3,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 07_create10k",
            "value": 2245.9,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": 230.9,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 09_clear1k_x8",
            "value": 85.4,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 21_ready-memory",
            "value": 2.111898422241211,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 22_run-memory",
            "value": 6.238946914672852,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 23_update5-memory",
            "value": 6.3226728439331055,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 25_run-clear-memory",
            "value": 4.954836845397949,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 26_run-10k-memory",
            "value": 41.56833457946777,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 41_size-uncompressed",
            "value": 166.1,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 42_size-compressed",
            "value": 54.3,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 43_first-paint",
            "value": 418,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1f1c5c247c926cb84738e2fe6f3f259da73107ec",
          "message": "Bump baptiste0928/cargo-install from 2 to 3 (#3721)\n\nBumps [baptiste0928/cargo-install](https://github.com/baptiste0928/cargo-install) from 2 to 3.\r\n- [Release notes](https://github.com/baptiste0928/cargo-install/releases)\r\n- [Changelog](https://github.com/baptiste0928/cargo-install/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/baptiste0928/cargo-install/compare/v2...v3)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: baptiste0928/cargo-install\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-09-01T11:59:18Z",
          "url": "https://github.com/yewstack/yew/commit/1f1c5c247c926cb84738e2fe6f3f259da73107ec"
        },
        "date": 1725193004181,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.21.0-keyed 01_run1k",
            "value": 197.1,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 02_replace1k",
            "value": 223,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 03_update10th1k_x16",
            "value": 97,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 04_select1k",
            "value": 40.6,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 05_swap1k",
            "value": 106,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 06_remove-one-1k",
            "value": 81.2,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 07_create10k",
            "value": 2224.2,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": 236.5,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 09_clear1k_x8",
            "value": 93.3,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 21_ready-memory",
            "value": 2.1434097290039062,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 22_run-memory",
            "value": 6.268768310546875,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 23_update5-memory",
            "value": 6.602245330810547,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 25_run-clear-memory",
            "value": 5.147319793701172,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 26_run-10k-memory",
            "value": 42.81913471221924,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 41_size-uncompressed",
            "value": 168.4,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 42_size-compressed",
            "value": 54.5,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 43_first-paint",
            "value": 422.7,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 01_run1k",
            "value": 196.4,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 02_replace1k",
            "value": 223.1,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 03_update10th1k_x16",
            "value": 72.5,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 04_select1k",
            "value": 17.2,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 05_swap1k",
            "value": 84,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 06_remove-one-1k",
            "value": 68.8,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 07_create10k",
            "value": 2259.5,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": 226,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 09_clear1k_x8",
            "value": 86.4,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 21_ready-memory",
            "value": 2.081705093383789,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 22_run-memory",
            "value": 6.216424942016602,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 23_update5-memory",
            "value": 6.335565567016602,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 25_run-clear-memory",
            "value": 4.994392395019531,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 26_run-10k-memory",
            "value": 41.544328689575195,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 41_size-uncompressed",
            "value": 166.1,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 42_size-compressed",
            "value": 54.3,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 43_first-paint",
            "value": 418.3,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "WorldSEnder",
            "username": "WorldSEnder",
            "email": "WorldSEnder@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "15ac51c399c27b6932357037fce32ddb24f24531",
          "message": "Fix hidden files not being uploaded with actions/upload-artifact upgrade in #3576 (#3724)\n\nIt was not prominently explained that \"hidden\" files, i.e. starting with \".\" are now ignored\r\nthis is only a problem when uploading globbed directories in benchmark where we don't\r\nknow the full path by default",
          "timestamp": "2024-09-05T18:35:43Z",
          "url": "https://github.com/yewstack/yew/commit/15ac51c399c27b6932357037fce32ddb24f24531"
        },
        "date": 1725562397379,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.21.0-keyed 01_run1k",
            "value": 201.5,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 02_replace1k",
            "value": 222.3,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 03_update10th1k_x16",
            "value": 93,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 04_select1k",
            "value": 41.3,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 05_swap1k",
            "value": 101.3,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 06_remove-one-1k",
            "value": 79.7,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 07_create10k",
            "value": 2263.5,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": 232.9,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 09_clear1k_x8",
            "value": 90.2,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 21_ready-memory",
            "value": 2.11441421508789,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 22_run-memory",
            "value": 6.304100036621094,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 23_update5-memory",
            "value": 6.535499572753906,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 25_run-clear-memory",
            "value": 5.143876075744629,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 26_run-10k-memory",
            "value": 42.804222106933594,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 41_size-uncompressed",
            "value": 168.3,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 42_size-compressed",
            "value": 54.6,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 43_first-paint",
            "value": 426.3,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 01_run1k",
            "value": 196.9,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 02_replace1k",
            "value": 223.3,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 03_update10th1k_x16",
            "value": 68.9,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 04_select1k",
            "value": 16.3,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 05_swap1k",
            "value": 80.4,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 06_remove-one-1k",
            "value": 67.5,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 07_create10k",
            "value": 2252.2,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": 224,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 09_clear1k_x8",
            "value": 88.3,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 21_ready-memory",
            "value": 2.1250972747802734,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 22_run-memory",
            "value": 6.24113655090332,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 23_update5-memory",
            "value": 6.336615562438965,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 25_run-clear-memory",
            "value": 5.007468223571777,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 26_run-10k-memory",
            "value": 41.5703182220459,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 41_size-uncompressed",
            "value": 166.2,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 42_size-compressed",
            "value": 54.5,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 43_first-paint",
            "value": 446.6,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Finn Bear",
            "username": "finnbear",
            "email": "finnbearlabs@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4da1263583a94d551e03ffaddbbdb12ac699b539",
          "message": "Fix CI. (#3727)",
          "timestamp": "2024-09-15T06:59:27Z",
          "url": "https://github.com/yewstack/yew/commit/4da1263583a94d551e03ffaddbbdb12ac699b539"
        },
        "date": 1726384574641,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.21.0-keyed 01_run1k",
            "value": 195.2,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 02_replace1k",
            "value": 220.8,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 03_update10th1k_x16",
            "value": 87.3,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 04_select1k",
            "value": 39.8,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 05_swap1k",
            "value": 104.7,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 06_remove-one-1k",
            "value": 77.3,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 07_create10k",
            "value": 2225.6,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": 229.5,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 09_clear1k_x8",
            "value": 87.9,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 21_ready-memory",
            "value": 2.1427040100097656,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 22_run-memory",
            "value": 6.304450988769531,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 23_update5-memory",
            "value": 6.605003356933594,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 25_run-clear-memory",
            "value": 5.142155647277832,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 26_run-10k-memory",
            "value": 42.80451202392578,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 41_size-uncompressed",
            "value": 168.3,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 42_size-compressed",
            "value": 54.6,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 43_first-paint",
            "value": 464.1,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 01_run1k",
            "value": 195.1,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 02_replace1k",
            "value": 212.8,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 03_update10th1k_x16",
            "value": 66.8,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 04_select1k",
            "value": 15.3,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 05_swap1k",
            "value": 79,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 06_remove-one-1k",
            "value": 68.7,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 07_create10k",
            "value": 2232,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": 221.5,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 09_clear1k_x8",
            "value": 83.7,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 21_ready-memory",
            "value": 2.144887924194336,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 22_run-memory",
            "value": 6.241277694702148,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 23_update5-memory",
            "value": 6.353899955749512,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 25_run-clear-memory",
            "value": 4.575557708740234,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 26_run-10k-memory",
            "value": 41.53852367401123,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 41_size-uncompressed",
            "value": 166.2,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 42_size-compressed",
            "value": 54.5,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 43_first-paint",
            "value": 452.4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5a46ee27a1635e8edb9414b07974b2d15243f9da",
          "message": "Bump the cargo-deps group across 1 directory with 13 updates (#3732)\n\nBumps the cargo-deps group with 12 updates in the / directory:\r\n\r\n| Package | From | To |\r\n| --- | --- | --- |\r\n| [indexmap](https://github.com/indexmap-rs/indexmap) | `2.4.0` | `2.5.0` |\r\n| [serde](https://github.com/serde-rs/serde) | `1.0.209` | `1.0.210` |\r\n| [tokio](https://github.com/tokio-rs/tokio) | `1.39.3` | `1.40.0` |\r\n| [syn](https://github.com/dtolnay/syn) | `2.0.76` | `2.0.77` |\r\n| [serde_json](https://github.com/serde-rs/json) | `1.0.127` | `1.0.128` |\r\n| [clap](https://github.com/clap-rs/clap) | `4.5.16` | `4.5.17` |\r\n| [anyhow](https://github.com/dtolnay/anyhow) | `1.0.86` | `1.0.89` |\r\n| [pulldown-cmark](https://github.com/raphlinus/pulldown-cmark) | `0.12.0` | `0.12.1` |\r\n| [bytes](https://github.com/tokio-rs/bytes) | `1.7.1` | `1.7.2` |\r\n| [hyper-util](https://github.com/hyperium/hyper-util) | `0.1.7` | `0.1.8` |\r\n| [tower](https://github.com/tower-rs/tower) | `0.5.0` | `0.5.1` |\r\n| [tower-http](https://github.com/tower-rs/tower-http) | `0.5.2` | `0.6.0` |\r\n\r\n\r\n\r\nUpdates `indexmap` from 2.4.0 to 2.5.0\r\n- [Changelog](https://github.com/indexmap-rs/indexmap/blob/master/RELEASES.md)\r\n- [Commits](https://github.com/indexmap-rs/indexmap/compare/2.4.0...2.5.0)\r\n\r\nUpdates `serde` from 1.0.209 to 1.0.210\r\n- [Release notes](https://github.com/serde-rs/serde/releases)\r\n- [Commits](https://github.com/serde-rs/serde/compare/v1.0.209...v1.0.210)\r\n\r\nUpdates `tokio` from 1.39.3 to 1.40.0\r\n- [Release notes](https://github.com/tokio-rs/tokio/releases)\r\n- [Commits](https://github.com/tokio-rs/tokio/compare/tokio-1.39.3...tokio-1.40.0)\r\n\r\nUpdates `syn` from 2.0.76 to 2.0.77\r\n- [Release notes](https://github.com/dtolnay/syn/releases)\r\n- [Commits](https://github.com/dtolnay/syn/compare/2.0.76...2.0.77)\r\n\r\nUpdates `serde_json` from 1.0.127 to 1.0.128\r\n- [Release notes](https://github.com/serde-rs/json/releases)\r\n- [Commits](https://github.com/serde-rs/json/compare/1.0.127...1.0.128)\r\n\r\nUpdates `clap` from 4.5.16 to 4.5.17\r\n- [Release notes](https://github.com/clap-rs/clap/releases)\r\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.16...clap_complete-v4.5.17)\r\n\r\nUpdates `anyhow` from 1.0.86 to 1.0.89\r\n- [Release notes](https://github.com/dtolnay/anyhow/releases)\r\n- [Commits](https://github.com/dtolnay/anyhow/compare/1.0.86...1.0.89)\r\n\r\nUpdates `pulldown-cmark` from 0.12.0 to 0.12.1\r\n- [Release notes](https://github.com/raphlinus/pulldown-cmark/releases)\r\n- [Commits](https://github.com/raphlinus/pulldown-cmark/compare/v0.12.0...v0.12.1)\r\n\r\nUpdates `bytes` from 1.7.1 to 1.7.2\r\n- [Release notes](https://github.com/tokio-rs/bytes/releases)\r\n- [Changelog](https://github.com/tokio-rs/bytes/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/tokio-rs/bytes/compare/v1.7.1...v1.7.2)\r\n\r\nUpdates `hyper-util` from 0.1.7 to 0.1.8\r\n- [Release notes](https://github.com/hyperium/hyper-util/releases)\r\n- [Changelog](https://github.com/hyperium/hyper-util/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/hyperium/hyper-util/compare/v0.1.7...v0.1.8)\r\n\r\nUpdates `tower` from 0.5.0 to 0.5.1\r\n- [Release notes](https://github.com/tower-rs/tower/releases)\r\n- [Commits](https://github.com/tower-rs/tower/compare/tower-0.5.0...tower-0.5.1)\r\n\r\nUpdates `tower-http` from 0.5.2 to 0.6.0\r\n- [Release notes](https://github.com/tower-rs/tower-http/releases)\r\n- [Commits](https://github.com/tower-rs/tower-http/compare/tower-http-0.5.2...tower-http-0.6.0)\r\n\r\nUpdates `serde_derive` from 1.0.209 to 1.0.210\r\n- [Release notes](https://github.com/serde-rs/serde/releases)\r\n- [Commits](https://github.com/serde-rs/serde/compare/v1.0.209...v1.0.210)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: indexmap\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n  dependency-group: cargo-deps\r\n- dependency-name: serde\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: tokio\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n  dependency-group: cargo-deps\r\n- dependency-name: syn\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: serde_json\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: clap\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: anyhow\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: pulldown-cmark\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: bytes\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: hyper-util\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: tower\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n- dependency-name: tower-http\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n  dependency-group: cargo-deps\r\n- dependency-name: serde_derive\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n  dependency-group: cargo-deps\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-09-20T11:02:31Z",
          "url": "https://github.com/yewstack/yew/commit/5a46ee27a1635e8edb9414b07974b2d15243f9da"
        },
        "date": 1726831171063,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "yew-hooks-v0.21.0-keyed 01_run1k",
            "value": 201,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 02_replace1k",
            "value": 224.7,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 03_update10th1k_x16",
            "value": 91.2,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 04_select1k",
            "value": 40.8,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 05_swap1k",
            "value": 104.2,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 06_remove-one-1k",
            "value": 82.1,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 07_create10k",
            "value": 2293,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": 230.5,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 09_clear1k_x8",
            "value": 90.6,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 21_ready-memory",
            "value": 2.0896072387695312,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 22_run-memory",
            "value": 6.304267883300781,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 23_update5-memory",
            "value": 6.5723772048950195,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 25_run-clear-memory",
            "value": 5.123734474182129,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 26_run-10k-memory",
            "value": 42.77216053009033,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 41_size-uncompressed",
            "value": 167.5,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 42_size-compressed",
            "value": 54.6,
            "unit": ""
          },
          {
            "name": "yew-hooks-v0.21.0-keyed 43_first-paint",
            "value": 425.8,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 01_run1k",
            "value": 198.8,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 02_replace1k",
            "value": 233.9,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 03_update10th1k_x16",
            "value": 71,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 04_select1k",
            "value": 16.4,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 05_swap1k",
            "value": 80,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 06_remove-one-1k",
            "value": 66.5,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 07_create10k",
            "value": 2255.5,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 08_create1k-after1k_x2",
            "value": 224.5,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 09_clear1k_x8",
            "value": 89.9,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 21_ready-memory",
            "value": 1.7947502136230469,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 22_run-memory",
            "value": 6.20775032043457,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 23_update5-memory",
            "value": 6.342177391052246,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 25_run-clear-memory",
            "value": 5.004121780395508,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 26_run-10k-memory",
            "value": 41.53813362121582,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 41_size-uncompressed",
            "value": 165.4,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 42_size-compressed",
            "value": 54.3,
            "unit": ""
          },
          {
            "name": "yew-v0.21.0-keyed 43_first-paint",
            "value": 427.3,
            "unit": ""
          }
        ]
      }
    ]
  }
}