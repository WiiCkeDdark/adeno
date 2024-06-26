import React from "react";
import { FlatList, Pressable } from "react-native";
import BackgroundWrapper from "../../components/BackgroundWrapper";
import CenteredHeader from "../../components/CenteredHeader";
import figures from "../../../assets/data/files/figures";
import CustomText from "../../components/CustomText";
import { useUser } from "../../context/userContext";
import getCountries from "../../../assets/data/files/countries";
import getInstitutions from "../../../assets/data/files/institutions/getInstitutions";
import getGroups from "../../../assets/data/files/groups/getGroups";
import getCompetences from "../../../assets/data/files/competences/getCompetences";
import getSymbols from "../../../assets/data/files/symbols/getSymbols";
import getElections from "../../../assets/data/files/elections/getElections";
import getEnlargements from "../../../assets/data/files/enlargements/getEnlargements";
import getTreaties from "../../../assets/data/files/treaties/getTreaties";
import getPrinciples from "../../../assets/data/files/principles/getPrinciples";
import getCandidate from "../../../assets/data/files/topList/getTopList";
import getGroupsFiles from "../../../assets/data/files/groupsFiles/getGroups";

const ThemeFiles = ({ navigation, route }) => {
  const { theme } = route.params;
  const { locale } = useUser();

  const handleGoBack = () => {
    navigation.goBack();
  };

  // Function to select the right data based on themeId
  const fetchDataForTheme = (id) => {
    switch (id) {
      case 1:
        return getCountries().filter((country) => country.inEU !== false);
      case 2:
        return getGroupsFiles(locale.userLocale);
      case 3:
        return getInstitutions();
      case 4:
        return figures;
      case 5:
        return getPrinciples();
      case 6:
        return getTreaties();
      case 7:
        return getEnlargements();
      case 8:
        return getCompetences();
      case 10:
        return getSymbols();
      case 11:
        return getElections();
      case 12:
        return getCandidate(locale.userLocale);
      default:
        return [];
    }
  };

  const handleGoToFile = (name, text, source) => {
    navigation.navigate("File", { name, text, source });
  };

  const data = fetchDataForTheme(theme.id);

  return (
    <BackgroundWrapper>
      <CenteredHeader handleGoBack={handleGoBack} title={theme.title} />
      <FlatList
        data={data}
        keyExtractor={(item, index) => `theme-item-${index}`}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              if (item.name) {
                handleGoToFile(item.name, item.text, item.source);
              }
            }}
            style={{
              padding: 10,
              backgroundColor: "white",
              padding: 10,
              marginHorizontal: 20,
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 12,
            }}
          >
            {item?.emoji && (
              <CustomText
                style={{ fontSize: 27, transform: [{ rotate: "-4deg" }] }}
              >
                {item?.emoji}
              </CustomText>
            )}
            <CustomText
              style={{ fontSize: 22, marginLeft: item?.emoji ? 12 : 0 }}
            >
              {item.name || item.firstname + " " + item.lastname}
            </CustomText>
          </Pressable>
        )}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </BackgroundWrapper>
  );
};

export default ThemeFiles;
