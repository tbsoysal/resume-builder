import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: 'white',
    fontFamily: 'ZillaSlab',
    fontSize: 16,
    fontWeight: 400,
    height: '100%',
    width: '100%'
  },
  leftColumn: {
    width: '45%',
    backgroundColor: '#1b3142',
    padding: 21,
    color: 'white',
  },
  rightColumn: {
    flex: 1,
    padding: 21,
  },
  firstName: {
    fontSize: 26.25,
    fontWeight: 700,
  },
  jobTitle: {
    fontSize: 19.5,
    fontWeight: 400,
    marginBottom: 15
  },
  contactListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7.5,
  },
  contactListText: {
    fontSize: 12,
    fontWeight: 300,
    marginLeft: 3.75,
  },
  section: {
    marginBottom: 15,
  },
  sectionHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    fontSize: 15,
    fontWeight: 600,
    textAlign: 'center',
    letterSpacing: 0.75,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 1.5,
    marginBottom: 7.5,
    paddingVertical: 2.25,
    paddingHorizontal: 0,
    textTransform: 'uppercase',
  },
  sectionIcon: {
    maxWidth: 12,
    maxHeight: 12
  },
  profileText: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 1.4,
  },
  languagesContainer: {
  },
  languageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 11.25,
  },
  languageName: {
    fontSize: 12,
    maxWidth: '65%'
  },
  levelContainer: {
    flexDirection: 'row',
    gap: 7.5,
  },

  documentsList: {
    flexDirection: 'column',
    marginBottom: 11.25
  },
  documentOrigin: {
    fontWeight: 700,
    fontSize: 12
  },
  documentDate: {
    fontWeight: 600,
    fontSize: 12
  },
  documentName: {
    fontWeight: 400,
    fontSize: 12
  },

  rightSectionHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3.75,
    backgroundColor: '#efefef',
    padding: 3.75,
    fontWeight: 600,
    fontSize: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 7.5,
  },

  experienceItem: {
    marginBottom: 7.5,
  },
  companyName: {
    fontWeight: 600,
    fontSize: 12
  },
  jobName: {
    fontSize: 12,
    fontWeight: 500
  },
  jobDate: {
    fontSize: 10.5,
    fontWeight: 300
  },
  jobExplanation: {
    fontSize: 10.5,
  },

  educationItem: {
    marginBottom: 11.5,
  },
  educationProgram: {
    fontSize: 12,
    fontWeight: 600
  },
  educationUniversity: {
    fontSize: 12,
    fontWeight: 500
  },
  educationDate: {
    fontSize: 11
  },

  skillItem: {
    fontSize: 12,
    marginBottom: 3.75
  }
});

export default styles;
