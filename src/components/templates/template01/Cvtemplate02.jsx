import React from 'react';
import ZillaSlabRegular from './ZillaSlab/ZillaSlab-Regular.ttf';
import ZillaSlabLight from './ZillaSlab/ZillaSlab-Light.ttf';
import ZillaSlabMedium from './ZillaSlab/ZillaSlab-Medium.ttf';
import ZillaSlabSemiBold from './ZillaSlab/ZillaSlab-SemiBold.ttf';
import ZillaSlabBold from './ZillaSlab/ZillaSlab-Bold.ttf';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Svg,
  Path,
  Circle
} from '@react-pdf/renderer';

Font.register({
  family: 'ZillaSlab',
  fonts: [
    { src: ZillaSlabLight, fontWeight: 300 },
    { src: ZillaSlabRegular, fontWeight: 400 },
    { src: ZillaSlabMedium, fontWeight: 500 },
    { src: ZillaSlabSemiBold, fontWeight: 600 },
    { src: ZillaSlabBold, fontWeight: 700 },
  ],
  format: 'truetype',
});

// Styles
const styles = StyleSheet.create({
  page: {
    display: 'flex',
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
    display: 'block',
    width: '45%',
    backgroundColor: '#1b3142',
    padding: 28,
    color: 'white',
  },
  rightColumn: {
    display: 'block',
    flex: 1,
    padding: 28,
  },
  firstName: {
    display: 'block',
    fontSize: 35, // 2.5em ~ 40px
    fontWeight: 700,
  },
  jobTitle: {
    display: 'block',
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
    display: 'block',
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
    display: 'block',
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

// Circle SVG component (filled or empty)
const LevelCircle = ({ filled }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
    <Circle cx="5" cy="5" r="4.5" fill={filled ? 'white' : 'none'} stroke="white" />
  </Svg>
);

const CVTemplate02 = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.leftColumn}>
        <Text style={styles.firstName}>{data.firstName}</Text>
        <Text style={styles.jobTitle}>{data.jobTitle}</Text>

        <View style={styles.section}>
          <View style={styles.contactListItem}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 16 13" fill="none">
              <Path d="M14 0.910034H2C1.46957 0.910034 0.960858 1.12075 0.585785 1.49582C0.210712 1.87089 0 2.3796 0 2.91003V10.41C0 10.9405 0.210712 11.4492 0.585785 11.8242C0.960858 12.1993 1.46957 12.41 2 12.41H14C14.5304 12.41 15.0391 12.1993 15.4142 11.8242C15.7893 11.4492 16 10.9405 16 10.41V2.91003C16 2.3796 15.7893 1.87089 15.4142 1.49582C15.0391 1.12075 14.5304 0.910034 14 0.910034ZM15 10.41C15 10.6753 14.8946 10.9296 14.7071 11.1171C14.5196 11.3047 14.2652 11.41 14 11.41H2C1.73478 11.41 1.48043 11.3047 1.29289 11.1171C1.10536 10.9296 1 10.6753 1 10.41V2.91003C1 2.64482 1.10536 2.39046 1.29289 2.20293C1.48043 2.01539 1.73478 1.91003 2 1.91003H14C14.2652 1.91003 14.5196 2.01539 14.7071 2.20293C14.8946 2.39046 15 2.64482 15 2.91003V10.41Z" fill="white" />
              <Path d="M13.185 3.52503L7.99998 7.76503L2.81498 3.52503C2.71168 3.45668 2.58669 3.4291 2.46422 3.44764C2.34175 3.46618 2.23052 3.52952 2.15208 3.62539C2.07365 3.72126 2.03359 3.84283 2.03967 3.96654C2.04574 4.09026 2.09753 4.20731 2.18498 4.29503L7.68498 8.79503C7.77406 8.86729 7.88528 8.90674 7.99998 8.90674C8.11469 8.90674 8.2259 8.86729 8.31498 8.79503L13.815 4.29503C13.8733 4.25644 13.9229 4.20606 13.9605 4.14713C13.9981 4.0882 14.023 4.02203 14.0334 3.9529C14.0439 3.88376 14.0397 3.81321 14.0212 3.74578C14.0028 3.67835 13.9703 3.61555 13.926 3.56144C13.8818 3.50732 13.8266 3.46309 13.7642 3.43161C13.7018 3.40013 13.6334 3.38208 13.5636 3.37865C13.4938 3.37522 13.424 3.38648 13.3588 3.4117C13.2935 3.43691 13.2343 3.47552 13.185 3.52503V3.52503Z" fill="white" />
            </Svg>
            <Text style={styles.contactListText}>{data.contact.email}</Text>
          </View>
          <View style={styles.contactListItem}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 17 17" fill="none">
              <Path d="M16.0478 7.55685C14.6818 4.36614 12.1319 1.82936 8.93417 0.479963C8.80539 0.431888 8.66287 0.436289 8.53729 0.49221C8.41172 0.548132 8.31311 0.651108 8.26268 0.77899C8.2352 0.842983 8.22074 0.911808 8.22014 0.981447C8.21954 1.05109 8.23281 1.12014 8.25917 1.1846C8.28554 1.24906 8.32448 1.30762 8.37372 1.35687C8.42296 1.40612 8.48152 1.44508 8.54597 1.47146C11.4936 2.71678 13.844 5.05589 15.1035 7.99751C15.1598 8.12226 15.2626 8.22006 15.3901 8.27005C15.5175 8.32003 15.6594 8.31825 15.7855 8.26507C15.8501 8.2368 15.9083 8.1958 15.9566 8.14454C16.005 8.09327 16.0426 8.03278 16.0671 7.96668C16.0916 7.90058 16.1025 7.83021 16.0992 7.7598C16.0958 7.68938 16.0784 7.62036 16.0478 7.55685Z" fill="white" />
              <Path d="M8.27318 4.30431C10.0599 5.0569 11.4853 6.47286 12.2497 8.25456C12.2903 8.34246 12.3544 8.4174 12.4349 8.4711C12.5155 8.5248 12.6093 8.55517 12.7061 8.55883C12.7769 8.5583 12.8468 8.54218 12.9107 8.51162C13.0313 8.45252 13.1247 8.34937 13.1715 8.22347C13.2184 8.09756 13.2151 7.95847 13.1625 7.83488C12.296 5.81205 10.6787 4.20415 8.65089 3.34953C8.52602 3.3052 8.38899 3.30977 8.26735 3.36232C8.14571 3.41487 8.04846 3.51151 7.99514 3.63282C7.94582 3.75899 7.94722 3.89935 7.99905 4.02451C8.05087 4.14967 8.1491 4.24994 8.27318 4.30431V4.30431Z" fill="white" />
              <Path d="M13.3251 10.5366C13.2113 10.4037 13.0701 10.2969 12.9112 10.2238C12.7523 10.1506 12.5794 10.1127 12.4044 10.1127C12.2294 10.1127 12.0566 10.1506 11.8976 10.2238C11.7387 10.2969 11.5975 10.4037 11.4837 10.5366C11.0536 10.9615 10.6234 11.3917 10.1985 11.8271C10.1796 11.8551 10.1552 11.8791 10.1269 11.8975C10.0985 11.9159 10.0667 11.9284 10.0335 11.9343C10.0002 11.9402 9.96603 11.9393 9.93309 11.9317C9.90015 11.9241 9.86909 11.9099 9.84174 11.8901C9.5637 11.7379 9.26467 11.6173 8.99712 11.4494C7.76938 10.6537 6.68112 9.66114 5.77607 8.51163C5.30353 7.95453 4.91311 7.3327 4.61669 6.66503C4.58445 6.60966 4.57359 6.54442 4.58616 6.4816C4.59872 6.41879 4.63384 6.36273 4.68489 6.32403C5.11506 5.90435 5.53474 5.47942 5.95967 5.04925C6.09835 4.93405 6.20995 4.78973 6.28655 4.62652C6.36315 4.46332 6.40286 4.28525 6.40286 4.10496C6.40286 3.92468 6.36315 3.74661 6.28655 3.58341C6.20995 3.42021 6.09835 3.27587 5.95967 3.16068C5.62392 2.81969 5.28818 2.48919 4.94719 2.1482L3.89799 1.099C3.78001 0.972593 3.63811 0.87087 3.48052 0.799728C3.32293 0.728586 3.15277 0.689436 2.97993 0.684555C2.80598 0.690288 2.63487 0.730318 2.47643 0.802338C2.31799 0.874357 2.17532 0.976951 2.05663 1.10424C1.62121 1.52917 1.20677 1.96983 0.760858 2.38951C0.368276 2.75977 0.133437 3.26705 0.105113 3.80594C0.0677424 4.68974 0.225357 5.57094 0.566766 6.38699C1.22109 8.0834 2.16348 9.65406 3.35239 11.0297C4.91597 12.9088 6.864 14.4311 9.06532 15.4941C10.0419 16.01 11.1124 16.3241 12.2129 16.4174H12.4175C12.7535 16.4316 13.0884 16.3707 13.3979 16.2391C13.7074 16.1075 13.9836 15.9085 14.2064 15.6567C14.5736 15.2423 14.9881 14.8646 15.3815 14.4711C15.5176 14.3554 15.6269 14.2115 15.7018 14.0493C15.7768 13.8872 15.8156 13.7107 15.8156 13.5321C15.8156 13.3534 15.7768 13.177 15.7018 13.0148C15.6269 12.8527 15.5176 12.7088 15.3815 12.593C14.7031 11.9076 14.0176 11.2221 13.3251 10.5366ZM14.6471 13.7419L14.2536 14.1301C13.9808 14.3924 13.7028 14.6547 13.43 14.9642C13.3072 15.107 13.1525 15.2189 12.9784 15.2909C12.8044 15.3629 12.6158 15.393 12.428 15.3787H12.2811C11.3161 15.2954 10.3777 15.0188 9.52172 14.5655C7.45658 13.5612 5.62755 12.1309 4.15504 10.3687C3.03568 9.0876 2.14807 7.62128 1.53202 6.0355C1.24436 5.36343 1.10825 4.63624 1.13334 3.90561C1.14535 3.6249 1.26568 3.35977 1.46907 3.16593C1.74187 2.90363 1.99368 2.64132 2.27171 2.37377L2.79632 1.84917C2.8135 1.81369 2.84034 1.78378 2.87374 1.76284C2.90714 1.74191 2.94576 1.73081 2.98518 1.73081C3.0246 1.73081 3.06322 1.74191 3.09663 1.76284C3.13003 1.78378 3.15685 1.81369 3.17403 1.84917C3.40486 2.07475 3.63044 2.30558 3.85602 2.5364L4.20226 2.88264L4.72687 3.40724L5.22523 3.90561C5.41933 4.09972 5.40884 4.13644 5.22523 4.31481L5.04687 4.49317C4.69014 4.86039 4.32816 5.21712 3.95045 5.58435C3.7532 5.77171 3.61937 6.01599 3.56764 6.28308C3.51592 6.55018 3.54888 6.82676 3.66192 7.07421C3.99302 7.83464 4.43499 8.54179 4.97343 9.17262C5.95385 10.406 7.13071 11.4694 8.45678 12.3202C8.66137 12.4461 8.87122 12.5511 9.05483 12.6402L9.33811 12.7819C9.53845 12.9002 9.76646 12.9635 9.99911 12.9655C10.1803 12.9646 10.3592 12.9258 10.5245 12.8518C10.6899 12.7777 10.8379 12.6699 10.9591 12.5353C11.3736 12.1104 11.7933 11.696 12.2339 11.2605C12.2788 11.2021 12.3414 11.1598 12.4123 11.1399C12.4856 11.1576 12.5505 11.2002 12.5959 11.2605C13.2954 11.96 13.9948 12.6472 14.6943 13.3222C14.815 13.5058 14.8307 13.553 14.6471 13.7419V13.7419Z" fill="white" />
            </Svg>
            <Text style={styles.contactListText}> {data.contact.phone}</Text>
          </View>
          <View style={styles.contactListItem}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 16 21" fill="none">
              <Path d="M8 0.910034C5.87827 0.910034 3.84344 1.75288 2.34314 3.25317C0.842853 4.75346 0 6.7883 0 8.91003C0 12.7131 4.12308 17.2793 7.58769 20.4423L8.01231 20.83L8.42462 20.43C12.2585 16.7377 16 12.8177 16 8.91003C16 6.7883 15.1571 4.75346 13.6569 3.25317C12.1566 1.75288 10.1217 0.910034 8 0.910034V0.910034ZM8 19.1377C3.63692 15.0639 1.23077 11.4454 1.23077 8.91003C1.23077 7.11472 1.94395 5.39294 3.21343 4.12346C4.48291 2.85398 6.20469 2.1408 8 2.1408C9.79531 2.1408 11.5171 2.85398 12.7866 4.12346C14.056 5.39294 14.7692 7.11472 14.7692 8.91003C14.7692 12.2023 11.4831 15.7346 8 19.1377Z" fill="white" />
              <Path d="M7.99999 5.83311C7.39143 5.83311 6.79654 6.01357 6.29054 6.35167C5.78454 6.68977 5.39017 7.17031 5.15728 7.73255C4.9244 8.29478 4.86347 8.91345 4.98219 9.51031C5.10091 10.1072 5.39396 10.6554 5.82427 11.0858C6.25459 11.5161 6.80285 11.8091 7.39971 11.9278C7.99658 12.0466 8.61524 11.9856 9.17747 11.7527C9.73971 11.5199 10.2203 11.1255 10.5584 10.6195C10.8965 10.1135 11.0769 9.5186 11.0769 8.91004C11.0769 8.09399 10.7527 7.31136 10.1757 6.73432C9.59867 6.15729 8.81604 5.83311 7.99999 5.83311ZM7.99999 10.7562C7.63485 10.7562 7.27792 10.6479 6.97432 10.4451C6.67072 10.2422 6.4341 9.95386 6.29437 9.61652C6.15463 9.27918 6.11808 8.90798 6.18931 8.54986C6.26054 8.19175 6.43637 7.8628 6.69456 7.60461C6.95275 7.34642 7.2817 7.17059 7.63982 7.09936C7.99794 7.02813 8.36914 7.06468 8.70648 7.20441C9.04382 7.34415 9.33215 7.58077 9.53501 7.88437C9.73787 8.18796 9.84614 8.5449 9.84614 8.91004C9.84614 9.39967 9.65164 9.86925 9.30542 10.2155C8.9592 10.5617 8.48962 10.7562 7.99999 10.7562V10.7562Z" fill="white" />
            </Svg>
            <Text style={styles.contactListText}> {data.contact.location}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Profil</Text>
          <Text style={styles.profileText}>{data.profileText}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Yabancı Dil</Text>
          <View style={styles.languagesContainer}>
            {data.languages.map((language, index) => (
              <View key={index} style={styles.languageRow}>
                <Text style={styles.languageName}>{language.name}</Text>
                <View style={styles.levelContainer}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <LevelCircle key={i} filled={i < language.level} />
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Belgeler</Text>
          {data.documents.map((doc, index) => (
            <View key={index} style={styles.documentsList}>
              <Text style={styles.documentOrigin}>{doc.documentOrigin}</Text>
              <Text style={styles.documentDate}>{doc.documentDate}</Text>
              <Text style={styles.documentName}>{doc.documentName}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.rightColumn}>
        <View style={styles.section}>
          <Text style={styles.rightSectionHeading}>Deneyim</Text>
          {data.experience.map((experience, index) => (
            <View key={index} style={styles.experienceItem}>
              <Text style={styles.companyName}>{experience.companyName}</Text>
              <Text style={styles.jobName}>{experience.jobName}</Text>
              <Text style={styles.jobDate}>{experience.jobDate}</Text>
              <Text style={styles.jobExplanation}>{experience.jobExplanation}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.rightSectionHeading}>Eğitim</Text>
          {data.education.map((edu, index) => (
            <View key={index} style={styles.educationItem}>
              <Text style={styles.educationProgram}>{edu.educationProgram}</Text>
              <Text style={styles.educationUniversity}>{edu.educationUniversity}</Text>
              <Text style={styles.educationDate}>{edu.educationDate}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.rightSectionHeading}>Yetenekler</Text>
          {data.skills.map((skill, index) => (
            <Text key={index} style={styles.skillItem}>• {skill.skill}</Text>
          ))}
        </View>
      </View>
    </Page>
  </Document >
);

export default CVTemplate02;

