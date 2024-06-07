import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Open Sans",
  src: "https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-U1Ug.ttf",
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Open Sans",
    fontSize: 10,
    padding: 30,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
    marginTop: "5px",
  },
  row1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  box: {
    border: 1,
    borderColor: "#000",
    padding: 5,
    flexGrow: 1,
    // marginBottom: 5,
  },
  smallBox: {
    border: 1,
    borderColor: "#000",
    width: "60%",
    height: 20,
  },
  smallBox2: {
    border: 1,
    borderColor: "#000",
    width: "60%",
    height: 20,
  },
  spacer: {
    height: 10,
  },
  table: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    // marginBottom: 20,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 2,
    fontWeight: "bold",
    flex: 1,
  },
  tableCol: {
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 2,
    flex: 1,
  },
  wideTableCol: {
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 2,
    flex: 2,
  },
  signatureBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  note: {
    marginTop: 20,
    fontSize: 8,
  },
});

const BillingForm = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.row}>
        <Text>Code médecin :</Text>
        <View style={styles.smallBox} />
      </View>
      <View style={styles.spacer} />

      <View style={styles.row}>
        <Text style={{ marginBottom: 5 }}>Matricule :</Text>
        <View style={styles.smallBox2} />
      </View>

      <View style={styles.row}>
        <Text style={{ marginBottom: 5 }}>Nom patient :</Text>
        <View style={styles.smallBox2} />
      </View>

      <View style={styles.spacer} />

      <View style={styles.row}>
        <Text style={{ marginBottom: 5 }}>Numéro accident :</Text>
        <View style={styles.smallBox2} />
      </View>

      <View style={styles.row}>
        <Text style={{ marginBottom: 5 }}>Date accident :</Text>
        <View style={styles.smallBox2} />
      </View>
      <View style={styles.spacer} />

      <Text style={styles.header}>Mémoire d'Honoraires</Text>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableColHeader}>N</Text>
          <Text style={styles.tableColHeader}>MED</Text>
          <Text style={styles.tableColHeader}>DATE (DU-AU) / DEMI / HEURE</Text>
          <Text style={styles.wideTableCol}>CODE TARIF / LIBELLÉ / OBJET</Text>
          <Text style={styles.tableColHeader}>NBR</Text>
          <Text style={styles.tableColHeader}>MONTANT</Text>
          <Text style={styles.tableColHeader}>MED. PRES.</Text>
        </View>
        {[...Array(10)].map((_, i) => (
          <View style={styles.tableRow} key={i}>
            <Text style={styles.tableCol}>{i + 1}</Text>
            <Text style={styles.tableCol} />
            <Text style={styles.tableCol} />
            <Text style={styles.wideTableCol} />
            <Text style={styles.tableCol} />
            <Text style={styles.tableCol} />
            <Text style={styles.tableCol} />
          </View>
        ))}
      </View>
      <View style={styles.row1}>
        <View
          style={{
            flexDirection: "column",
            width: "135px",
          }}
        >
          <View style={styles.box} />
          <Text>Total</Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              width: "180px",
              marginRight: 60,
              gap: "30px",
            }}
          >
            <Text>REPORT / TOTAL :</Text>
            <View style={[styles.box]}>
              <Text>20</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "180px",
              marginRight: 68,
              gap: "27px",
            }}
          >
            <Text>ACOMPTE À DÉDUIRE :</Text>
            <View style={styles.box}>
              <Text
                style={{
                  width: "70px",
                }}
              >
                20
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.signatureBox}>
        <Text>POUR ACQUIT, LE</Text>
        <Text>Signature et cachet du médecin :</Text>
      </View>

      <Text style={styles.note}>
        * Prière de rappeler la(e)(s) référence(s) ci-dessus sur l'ordre de
        virement. La loi du 31.3.79, modifiée par celle du 1.10.92, art.
        28-1(5), est appliquée
      </Text>
    </Page>
  </Document>
);

export default BillingForm;
