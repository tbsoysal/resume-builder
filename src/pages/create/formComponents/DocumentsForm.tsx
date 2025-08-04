import styles from "../CreationPage.module.scss";
import { CategoryName, CategoryTypes, CvDataType, DocumentType } from "../CvData";

interface DocumentsFormProps {
  cvData: CvDataType;
  addItem: (categoryName: CategoryName, newItemObject: CategoryTypes, resetInput: ()=>void) => void;
  removeItem: (categoryName: CategoryName, index: number) => void;
  documentInput: DocumentType;
  setDocumentInput: React.Dispatch<React.SetStateAction<DocumentType>>;
}

const DocumentsForm = (props: DocumentsFormProps) => {
  const visible = props.documentInput.visible;
  return (
    <div style={{ display: visible ? 'block' : 'none' }} className={styles.documentsSection}>
      <h3>Belgeler</h3>
      <div className={styles.documentSection}>
        <label htmlFor="documentOrigin">Kurum Adı</label>
        <input type="text" id="documentOrigin" value={props.documentInput.origin} onChange={e => props.setDocumentInput(prev => ({ ...prev, origin: e.target.value }))} />
        <label htmlFor="documentDate">Veriliş Tarihi</label>
        <input type="text" id="documentDate" value={props.documentInput.date} onChange={e => props.setDocumentInput(prev => ({ ...prev, date: e.target.value }))} />
        <label htmlFor="documentName">Belge Adı</label>
        <input type="text" id="documentName" value={props.documentInput.name} onChange={e => props.setDocumentInput(prev => ({ ...prev, name: e.target.value }))} />
        <input type="button" value="Ekle" onClick={() => props.addItem('documents', props.documentInput, () => { props.setDocumentInput({ origin: '', name: '', date: '', visible: true }) })} />
        {props.cvData.documents.map((document, index) => (
          <span key={index} onClick={() => props.removeItem('documents', index)} className={styles.languageTag}>
            {document.origin} x
          </span>
        ))}
      </div>
    </div>
  )
}

export default DocumentsForm
