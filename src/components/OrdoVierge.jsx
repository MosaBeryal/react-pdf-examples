import { View, Text ,StyleSheet, Document ,Page} from "@react-pdf/renderer";
import React from "react";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  headerLeft: {
    width: "30%",
  },
  headerRight: {
    width: "30%",
  },
  textBox: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 5,
    marginBottom: 5,
    fontSize: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 14,
    marginBottom: 10,
  },
  formField: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  dateBox: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 5,
    flex: 1,
    marginRight: 10,
    fontSize: 10,
  },
  largeBox: {
    borderWidth: 1,
    borderColor: "#000",
    height: 150,
    marginBottom: 10,
  },
  table: {
    display: "table",
    width: "100%",
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    width: "14.28%",
    borderRightWidth: 1,
    borderRightColor: "#000",
    borderRightStyle: "solid",
    backgroundColor: "#f0f0f0",
    padding: 5,
  },
  tableCol: {
    width: "14.28%",
    borderRightWidth: 1,
    borderRightColor: "#000",
    borderRightStyle: "solid",
    padding: 5,
  },
  tableCellHeader: {
    fontSize: 10,
    fontWeight: "bold",
  },
  tableCell: {
    fontSize: 10,
  },
  signature: {
    borderTopWidth: 1,
    borderTopColor: "#000",
    borderTopStyle: "solid",
    width: 200,
    textAlign: "center",
    marginTop: 20,
    fontSize: 10,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#000",
    borderTopStyle: "solid",
    paddingTop: 10,
    fontSize: 10,
    textAlign: "center",
  },
});

const OrdoVierge = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.textBox}>Matricule :</Text>
            <Text style={styles.textBox}>Nom patient :</Text>
            <Text style={styles.textBox}>Numéro accident :</Text>
            <Text style={styles.textBox}>Date accident :</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.textBox}>Code médecin :</Text>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>ORDONNANCE MEDICALE</Text>

        {/* Main Content */}
        <View style={styles.formField}>
          <Text style={styles.dateBox}>Date :</Text>
          <Text style={styles.dateBox}>Date expiration :</Text>
        </View>
        <View style={styles.largeBox}></View>

        {/* Table */}
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Date</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>P. ord.</Text>
            </View>
            {Array.from({ length: 6 }, (_, index) => (
              <View style={styles.tableColHeader} key={index}>
                <Text style={styles.tableCellHeader}>{index + 1}</Text>
              </View>
            ))}
          </View>
          {[
            "Qtè. tot.",
            "Dèl. 1",
            "Dèl. 2",
            "Dèl. 3",
            "Dèl. 4",
            "Dèl. 5",
            "Dèl. 6",
            "Dèl. 7",
          ].map((row, rowIndex) => (
            <View style={styles.tableRow} key={rowIndex}>
              <View style={styles.tableCol}></View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{row}</Text>
              </View>
              {Array.from({ length: 6 }, (_, colIndex) => (
                <View style={styles.tableCol} key={colIndex}></View>
              ))}
            </View>
          ))}
        </View>

        {/* Signature */}
        <View style={styles.signature}>
          <Text>Estampille / Signature prestataire</Text>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          La loi du 31.3.79, modifiée par celle du 1.10.92, art. 28-(16), est
          appliquée
        </Text>
      </Page>
    </Document>
  );
};

export default OrdoVierge;
