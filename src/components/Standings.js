  useEffect(() => {
    setLoading(true);

    const options = {
      method: "GET",
      url: `https://api.football-data.org/v2/competitions/${selectedLeagueCode}/standings?season=${selectedYear}`,

      headers: { "X-Auth-Token": "9225ece0729c45aeae5d345f68930109" },
    };
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.standings[0].table);
        setData(response.data.standings[0].table);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, [selectedYear, selectedYear]);

