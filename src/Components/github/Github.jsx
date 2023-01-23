import { Box, Heading, Stack } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import styles from "./Github.css"
function Github() {
  return (
    <Box m={"auto"}  

    // display={"flex"} flexDirection={"column"} alignItems={"center"}
    // justifyContent={"center"}
    >
      <Heading
        size={"lg"}
        // fontWeight={"550"}
        color="rgb(35,34,34)"
        // w={"75%"}
        margin="auto"
        textAlign={"left"}
        marginTop="50px"
        mb={"25px"}
        // className={styles.text}
      >
        GitHub Stats
      </Heading>
      <div >
        <GitHubCalendar
       
          username="shiivaniiawasthii"
          fontSize={18}
          color="#ff0000"
          // className="calender"
        />
        <Stack  >
          <img
            // align="center"
            src="https://github-readme-stats.vercel.app/api?username=shiivaniiawasthii&show_icons=true&include_all_commits=true&count_private=true&hide=issues,contribs&border_radius=10&locale=en"
            alt="shiivaniiawasthii"
            // height="139"
          />
          <img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=shiivaniiawasthii&border_radius=10;" alt="shiivaniiawasthii" />
        </Stack>
      </div>
    </Box>
  );
}
export default Github;