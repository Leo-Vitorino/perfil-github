import { StyleSheet, Text, View } from "react-native";

type Props = {
  repos: number;
  followers: number;
  following: number;
};

export default function Stats({ repos, followers, following }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{repos} Repos</Text>
      <Text style={styles.text}>{followers} Seguidores</Text>
      <Text style={styles.text}>{following} Seguindo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#30363d",
    paddingVertical: 10,
    marginBottom: 15,
  },
  text: { color: "#c9d1d9" },
});