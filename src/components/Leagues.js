  useEffect(() => {
    setLoading(true);
    const options = {
      method: "GET",
      // url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
      url: "https://api.football-data.org/v2/competitions",

      
      headers: { "X-Auth-Token": "9225ece0729c45aeae5d345f68930109" },
    };
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.competitions);
        setData(response.data.competitions);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);
