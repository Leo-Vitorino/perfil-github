import { StyleSheet, Text, View } from "react-native";

type Props = {
  name: string;
  description: string;
  stars: number;
  language: string;
};

export default function RepoCard({ name, description, stars, language }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.desc}>{description}</Text>
      <Text style={styles.lang}>🟡 {language}</Text>
      <Text style={styles.star}>⭐ {stars}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#30363d",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: { color: "#58a6ff", fontWeight: "bold" },
  desc: { color: "#8b949e" },
  lang: { color: "#c9d1d9", marginTop: 5 },
  star: { color: "#f1c40f" },
});