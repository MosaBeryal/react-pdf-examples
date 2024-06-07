import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// Register a font (optional)
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
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 12,
    marginBottom: 10,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    border: 1,
    borderColor: "#000",
    padding: 5,
    flexGrow: 1,
  },
  boxLabel: {
    marginBottom: 5,
    fontSize: 10,
    fontWeight: "bold",
  },
  footer: {
    fontSize: 8,
    textAlign: "center",
    marginTop: 20,
  },
  signatureBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  checkbox: {
    width: 10,
    height: 10,
    borderWidth: 1,
    marginRight: 5,
  },
  flexColumn: {
    flexDirection: "column",
    flexGrow: 1,
  },
  flexColumnItem: {
    marginBottom: 5,
  },
  checkboxLabel: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  boldText: {
    fontWeight: "bold",
  },
  wideBox: {
    border: 1,
    borderColor: "#000",
    padding: 5,
    height: 50,
  },
});

const Imaging = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text>Formulaire de demande d'examen d'imagerie médicale</Text>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={[styles.box, { marginRight: 10 }]}>
            <Text style={styles.boldText}>Médecin demandeur :</Text>
            <Text>Nom, prénom : Fozing Thierry</Text>
            <Text>Code : 90 2286-89</Text>
            <Text>Spécialité : Médecin spécialiste en cardiologie</Text>
            <Text>Coordonnées :</Text>
            <Text>17 RUE DES BAINS L-1212 LUXEMBOURG</Text>
            <Text>Tél : 691574757</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boldText}>Identification du patient :</Text>
            <Text>Nom, prénom : ABBAS Abdul Rahman</Text>
            <Text>Date de naissance : 01/01/1996</Text>
            <Text>Identifiant national : 1996010100930</Text>
            <Text>Coordonnées :</Text>
            <Text>61 RUE DE TREVES L-2630 LUXEMBOURG</Text>
            <Text>Sexe : F</Text>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.boldText}>Examen demandé :</Text>
        <View style={styles.wideBox}></View>
      </View>
      <View style={styles.section}>
        <Text style={styles.boldText}>
          Contexte clinique (informations cliniques) :
        </Text>
        <View style={styles.wideBox}></View>
      </View>
      <View style={styles.section}>
        <Text style={styles.boldText}>Diagnostic recherché (finalité) :</Text>
        <View style={styles.wideBox}></View>
      </View>
      <View style={styles.section}>
        <Text style={styles.boldText}>
          Informations pertinentes supplémentaires :
        </Text>
        <View style={[styles.box, { padding: 10 }]}>
          <View style={styles.row}>
            <View style={styles.flexColumn}>
              <View style={styles.checkboxLabel}>
                <View style={styles.checkbox} />
                <Text>Grossesse</Text>
              </View>
              <View style={styles.checkboxLabel}>
                <View style={styles.checkbox} />
                <Text>Insuffisance rénale (DFG : _______ ml/min/1,73m²)</Text>
              </View>
              <View style={styles.checkboxLabel}>
                <View style={styles.checkbox} />
                <Text>Diabète, Metformine</Text>
              </View>
              <View style={styles.checkboxLabel}>
                <View style={styles.checkbox} />
                <Text>Allergie aux produits de contraste</Text>
              </View>
              <View style={styles.checkboxLabel}>
                <View style={styles.checkbox} />
                <Text>Examens antérieurs pertinents</Text>
              </View>
            </View>
            <View style={styles.flexColumn}>
              <View style={styles.checkboxLabel}>
                <View style={styles.checkbox} />
                <Text>Contre-indication IRM</Text>
              </View>
              <View style={styles.checkboxLabel}>
                <View style={styles.checkbox} />
                <Text>Infection</Text>
              </View>
              <View style={styles.checkboxLabel}>
                <View style={styles.checkbox} />
                <Text>Traitement anticoagulant</Text>
              </View>
              <View style={styles.checkboxLabel}>
                <View style={styles.checkbox} />
                <Text>Autres</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.signatureBox}>
        <Text>Date de la demande : 12/02/2024</Text>
        <Text>Signature du médecin demandeur : </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.boldText}>
          Validation / Modification par le médecin réalisateur :
        </Text>
        <View style={styles.box}>
          <Text>Nom du médecin réalisateur : </Text>
          <View style={styles.row}>
            <View style={styles.checkboxLabel}>
              <View style={styles.checkbox} />
              <Text>Modification de la demande d'examen : Non</Text>
            </View>
            <View style={styles.checkboxLabel}>
              <View style={styles.checkbox} />
              <Text>Oui, remplacé par : </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.checkboxLabel}>
              <View style={styles.checkbox} />
              <Text>Examen complémentaire nécessaire : Non</Text>
            </View>
            <View style={styles.checkboxLabel}>
              <View style={styles.checkbox} />
              <Text>Oui, à compléter par : </Text>
            </View>
          </View>
          <View style={styles.signatureBox}>
            <Text>Date de validation / modification : </Text>
            <Text>Signature du médecin réalisateur : </Text>
          </View>
        </View>
      </View>
      <Text style={styles.footer}>
        Version 15 juillet 2019 - Direction de la Santé - Modèle conforme à la
        loi du 28 mai 2019 relative à la radioprotection art. 80
      </Text>
    </Page>
  </Document>
);

export default Imaging;
