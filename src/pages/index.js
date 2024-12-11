import { HStack, Stack, VStack } from "@chakra-ui/react";
import { TodayForecast } from "@/components/TodayForecast";
import { DaysForecast } from "@/components/DaysForecast";
import { MainForecast } from "@/components/MainForecast";
import { AirConditions } from "@/components/AirConditions";
import { fetchData } from "@/helpers/fetchData";
import { useEffect, useState } from "react";
import SearchInput from "@/components/SearchInput";
import { Astro } from "@/components/Astro";

export default function Home() {
  const [query, setQuery] = useState("530075");
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState({
    main: {},
    astro: {},
    air: {},
    hour: [],
    days: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchData(query)
      .then((fetchedData) => {
        if (fetchedData) {
          setData(fetchedData);
        } else {
          console.error("No data received");
          setData({
            main: {},
            astro: {},
            air: {},
            hour: [],
            days: [],
          });
        }
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <HStack>
      {/* <Navbar /> */}
      <Stack height="100%">
        <SearchInput
          value={searchValue}
          setValue={setSearchValue}
          query={query}
          setQuery={setQuery}
        />
        <MainForecast main={data.main} loading={loading} />
        <TodayForecast hour={data.hour} loading={loading} />
        <AirConditions air={data.air} loading={loading} />
      </Stack>
      <VStack height={"100%"}>
        <DaysForecast days={data.days} loading={loading} />
        <Astro astro={data.astro} />
      </VStack>
    </HStack>
  );
}
