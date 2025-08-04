import React from 'react';
import styles from './CvTemplate01BlobStyles.jsx';
import { Document, Page, Text, View } from '@react-pdf/renderer';
import { registerFont } from './font/fontRegister.jsx';
import {
  DocumentIcon,
  EducationIcon,
  EmailIcon,
  LanguageIcon,
  LanguageLevelIcon,
  LocationIcon,
  PhoneIcon,
  SkillsIcon,
  WorkIcon,
  ProfileIcon
} from './icons/Icons.jsx';
import { CvDataType } from '@/pages/create/CvData.js';

// Registers Font for Cv Template 01
registerFont();

interface CvTemplate01BlobProps {
  data: CvDataType;
}

const CvTemplate01Blob = ({ data }: CvTemplate01BlobProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Left Column */}
      <View style={styles.leftColumn}>
        {/* First Name and Job Title */}
        <Text style={styles.firstName}>{data.firstName}</Text>
        <Text style={styles.jobTitle}>{data.jobTitle}</Text>

        {/* Contact Section */}
        <View style={styles.section}>
          {/* Email */}
          {
            data.contact.email && (
              <View style={styles.contactListItem}>
                <EmailIcon />
                <Text style={styles.contactListText}>{data.contact.email}</Text>
              </View>)
          }
          {/* Phone */}
          {
            data.contact.phone && (
              <View style={styles.contactListItem}>
                <PhoneIcon />
                <Text style={styles.contactListText}> {data.contact.phone}</Text>
              </View>)
          }
          {/* Location */}
          {
            data.contact.location && (
              <View style={styles.contactListItem}>
                <LocationIcon />
                <Text style={styles.contactListText}> {data.contact.location}</Text>
              </View>)
          }
        </View>

        {/* Profile Text Section */}
        {
          data.profileText &&
          <View style={styles.section}>
            <View style={styles.sectionHeading}>
              <ProfileIcon styles={styles} />
              <Text>PROFİL</Text>
            </View>
            <Text style={styles.profileText}>{data.profileText}</Text>
          </View>
        }

        {/* Languages Section */}
        {
          data.languages[0] &&
          <View style={styles.section}>
            <View style={styles.sectionHeading}>
              <LanguageIcon styles={styles} />
              <Text>YABANCI DİL</Text>
            </View>
            {/* Languages level icons*/}
            <View style={styles.languagesContainer}>
              {data.languages.map((language, index) => (
                <View key={index} style={styles.languageRow}>
                  <Text style={styles.languageName}>{language.name}</Text>
                  <View style={styles.levelContainer}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <LanguageLevelIcon key={i} filled={i < language.level} />
                    ))}
                  </View>
                </View>
              ))}
            </View>
          </View>
        }

        {/* Documents Section */}
        {
          data.documents[0] &&
          <View style={styles.section}>
            <View style={styles.sectionHeading}>
              <DocumentIcon styles={styles} />
              <Text>BELGELER</Text>
            </View>
            {data.documents.map((doc, index) => (
              <View key={index} style={styles.documentsList}>
                <Text style={styles.documentOrigin}>{doc.origin}</Text>
                <Text style={styles.documentDate}>{doc.date}</Text>
                <Text style={styles.documentName}>{doc.name}</Text>
              </View>
            ))}
          </View>
        }
      </View>

      {/* Right Column */}
      <View style={styles.rightColumn}>

        {/* Experience Section */}
        {
          data.experience[0] &&
          <View style={styles.section}>
            <View style={styles.rightSectionHeading}>
              <WorkIcon styles={styles} />
              <Text>DENEYİM</Text>
            </View>
            {data.experience.map((experience, index) => (
              <View key={index} style={styles.experienceItem}>
                <Text style={styles.companyName}>{experience.companyName}</Text>
                <Text style={styles.jobName}>{experience.jobName}</Text>
                <Text style={styles.jobDate}>{experience.jobDate}</Text>
                <Text style={styles.jobExplanation}>{experience.jobExplanation}</Text>
              </View>
            ))}
          </View>
        }

        {/* Education Section */}
        {
          data.education[0] &&
          <View style={styles.section}>
            <View style={styles.rightSectionHeading}>
              <EducationIcon styles={styles} />
              <Text>EĞİTİM</Text>
            </View>
            {data.education.map((edu, index) => (
              <View key={index} style={styles.educationItem}>
                <Text style={styles.educationProgram}>{edu.program}</Text>
                <Text style={styles.educationUniversity}>{edu.university}</Text>
                <Text style={styles.educationDate}>{edu.date}</Text>
              </View>
            ))}
          </View>
        }

        {/* Skills Section */}
        {
          data.skills[0] &&
          <View style={styles.section}>
            <View style={styles.rightSectionHeading}>
              <SkillsIcon styles={styles} />
              <Text>YETENEKLER</Text>
            </View>
            {data.skills.map((skill, index) => (
              <Text key={index} style={styles.skillItem}>• {skill.text}</Text>
            ))}
          </View>
        }
      </View>
    </Page>
  </Document >
);

export default CvTemplate01Blob;