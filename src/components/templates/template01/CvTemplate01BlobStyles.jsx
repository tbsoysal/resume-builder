import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: 'white',
    fontFamily: 'ZillaSlab',
    fontSize: 18,
    fontWeight: 400,
    height: '100%',
    width: '100%',
  },
  leftColumn: {
    width: '45%',
    backgroundColor: '#1b3142',
    padding: 28,
    color: 'white',
  },
  rightColumn: {
    flex: 1,
    padding: 28,
  },
  firstName: {
    fontSize: 35,
    fontWeight: 700,
  },
  jobTitle: {
    fontSize: 20, // 1.5em
    marginBottom: 15,
  },
  contactListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  contactListText: {
    fontSize: 14,
    fontWeight: 300,
    marginLeft: 5,
  },
  section: {
    display: 'block',
    marginBottom: 20,
  },
  sectionHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    fontSize: 18,
    fontWeight: 600,
    textAlign: 'center',
    letterSpacing: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 2,
    marginBottom: 10,
    paddingVertical: 3,
    paddingHorizontal: 0,
    textTransform: 'uppercase',
  },
  sectionIcon: {
    maxWidth: 18,
    maxHeight: 18
  },

  profileText: {
    display: 'block',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 1.4,
  },
  languagesContainer: {
    display: 'block',
  },
  languageRow: {
    display: 'block',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  languageName: {
    display: 'block',
    fontSize: 16,
    maxWidth: '65%'
  },
  levelContainer: {
    flexDirection: 'row',
    gap: 5,
  },

  documentsList: {
    flexDirection: 'column',
    marginBottom: 15
  },
  documentOrigin: {
    fontWeight: 600,
    fontSize: 16
  },
  documentDate: {
    fontWeight: 500,
    fontSize: 14
  },
  documentName: {
    fontWeight: 400,
    fontSize: 14
  },

  rightSectionHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    backgroundColor: '#efefef',
    padding: 5,
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 10,
  },

  experienceItem: {
    marginBottom: 10,
  },
  companyName: {
    fontWeight: 500,
    fontSize: 16
  },
  jobName: {
    fontSize: 16
  },
  jobDate: {
    fontSize: 14
  },
  jobExplanation: {
    fontSize: 14,
  },

  educationItem: {
    marginBottom: 10,
  },
  educationProgram: {
    fontSize: 16,
    fontWeight: 500
  },
  educationUniversity: {
    fontSize: 16
  },
  educationDate: {
    fontSize: 14
  },

  skillItem: {
    fontSize: 14,
    marginBottom: 5
  }

});

export default styles;
