import React from 'react'
import { createRoot } from "react-dom/client"

const container = document.getElementById("app")

if (!container) {
    throw Error('No #app in document.')
}

const root = createRoot(container)

// this is an example ToS, do not use I am not a lawyer.
root.render(
  <main>
      <h1>Terms of Service</h1>
      <h4>Effective from October 18, 2024</h4>
      <p>Welcome to example.com!</p>

      <p>example.com is a B2C web application that provides content generation from gathered newsletters for users (hereinafter the "Application").</p>

      <p>
        The example.com Application is developed and operated by Phrayz, a company that is currently in the process of being registered.
      </p>
      <p>
        These General Terms of Service (hereinafter the "Terms" or "ToS") govern the conditions under which the User is authorized to use the Application and benefit from its Services. Access to the Application and use of the Services are conditional upon acceptance of and compliance with these Terms. Therefore, by creating a User Account and using the Application, you agree to comply with the obligations described in this document.
      </p>
      <p>
        Our Privacy Policy is an integral part of these Terms. Please read all of these documents carefully and do not register with example.com if you do not agree with any of the provisions contained herein.
      </p>

      <h2> 1. Definitions and Interpretation </h2>
      <p>
        In these ToS, the following terms have the following meanings: "User Account" refers to the specific space for a User where they can access their generated content. "Content" means any data, information, or material provided by the User or collected by the Application in relation to the User's inboxes. "Parties" means Phrayz and the User. "Services" means all the features offered to the User through the Application. "User" means any natural person using the Application and its Services.
      </p>

      <h2>2. User Account Creation</h2>
      <h4>2.1. Requested Information</h4>

      <p>
        In order to use example.com, you must create a User Account that will be specific to you. When creating your User Account, we will ask you to provide the following information: your email address.
      </p>

      <p>
        These elements are essential to use the Application. When creating your User Account, the information provided must correspond to your own identity and must not be false or erroneous. You also agree to keep your User Account password confidential. If you believe that someone is using your User Account in an illegitimate manner, you agree to notify us by contacting us at support@example.com.
      </p>

      <h4>2.2. Age Limit and Parental Permission</h4>
      <p>
        example.com is open to users over the age of 13 only. If you are under 13, you are not allowed to create a User Account and use the Application. In addition, if you are between the ages of 13 and 16, depending on the country in which you reside, we may require permission from your legal guardian. If you are the legal representative of a minor over the age of 13 and you wish to contact us, please send us a message to the following email address: support@example.com.
      </p>

      <h2>3. Services Description</h2>
      <p>
        You may use the Services to access generated content and inboxes through the example.com web application. The Services allow you to view your generated content and inboxes.
      </p>

      <h2>4. User Obligations</h2>
      <p>
        By using the example.com Platform, Users agree to abide by the following obligations:
      </p>

      <h4>4.1. Accurate Information</h4>
      <p>
        Users agree to provide accurate and complete information during the registration process and to update their information when necessary to maintain its accuracy.
      </p>

      <h4>4.2. Account Security</h4>
      <p>
        Users are responsible for maintaining the confidentiality of their login credentials, including their email address. Users must not disclose their login credentials to third parties or allow unauthorized individuals to access their accounts. Users are responsible for all activities that occur under their accounts and must notify example.com immediately in case of any unauthorized access or breach of security.
      </p>

      <h4>4.3. Lawful Conduct</h4>
      <p>
        Users must use the Platform and Services in compliance with all applicable laws, regulations, and rules. Users are prohibited from using the Platform for any illegal, fraudulent, or harmful activities, including but not limited to, infringement of intellectual property rights, harassment, defamation, or invasion of privacy.
      </p>

      <h4>4.4. Platform Integrity</h4>
      <p>
        Users must not engage in any action that may harm, disrupt, or compromise the integrity, functionality, or performance of the Platform or Services. This includes, but is not limited to, attempting to gain unauthorized access to the Platform or its systems, using any automated means to access or use the Platform, uploading or transmitting malicious software or viruses, or interfering with the proper functioning of the Platform.
      </p>

      <h4>4.5. Respect for Other Users</h4>
      <p>
        Users must treat other users with respect and must not engage in any harassing, threatening, abusive, or offensive behavior, either on the Platform or through communications related to the use of the Services.
      </p>

      <h4>4.6. No Commercial Use</h4>
      <p>
        Users may not use the Platform or Services for commercial purposes, unless explicitly authorized by example.com. This includes, but is not limited to, selling or offering to sell products or services, advertising or promoting products or services, or soliciting other Users for commercial purposes. Failure to comply with these obligations may result in the suspension or termination of your User Account and access to the Platform and Services at the sole discretion of example.com, without prejudice to any damages that example.com may seek as a result of your breach of these obligations.
      </p>

      <h2>5. User Account Deletion</h2>
      <p>
        Users can request account deletion by contacting example.com's support team. Upon confirmation, example.com will delete the account and associated data within 30 days, except for data required to be retained by law. example.com reserves the right to suspend or terminate user accounts for any reason, including but not limited to, violation of these Terms of Use, or inactivity exceeding 12 months. Users will be notified prior to termination.
      </p>

      <h2>6. Intellectual Property</h2>
      <p>
        example.com and its licensors own all rights, titles, and interests in the Platform, including all intellectual property rights. Unauthorized use of example.com's trademarks, logos, or copyrighted material is prohibited. Users retain ownership of content they upload or create on the Platform. By using example.com, users grant the platform a royalty-free, non-exclusive, worldwide license to use, reproduce, display, distribute, and modify their content for the purpose of providing services. Users agree not to infringe upon the intellectual property rights of others and are responsible for any infringements that may occur as a result of their use of the Platform.
      </p>

      <h2>7. Indemnification, Warranty Exclusion, and Liability</h2>
      <p>
        The Platform and its Services are provided "as is." Consequently, we do not offer you any guarantee concerning them, and in particular concerning: The conformity of our Services to your expectations; The absence of interruption, errors, security breaches, infringement of the rights of third parties in the operation of the example.com Platform; The accuracy and reliability of information obtained through the use of our Services. More generally, you acknowledge that the Internet, and any telematic network used for data transmission may involve risks related to the lack of protection of certain data against possible misuse and risks of contamination by viruses.
      </p>
      <p>
        Also, example.com cannot be held responsible for the loss or alteration of data, or for the loss of opportunity or time. In any event, our liability is limited to direct material damages to the exclusion of any indirect damages of any kind. We further reserve the right, to the extent permitted by law, to modify, suspend, discontinue, or limit the availability of all or any part of our Platform for business and operational reasons at any time without notice.
      </p>

      <h2>8. Data Protection and Privacy</h2>
      <p>
        Users are informed that the personal data collected may be subject to data processing activities in accordance with applicable data protection laws and regulations. For more details regarding the use of your personal data and your rights, we recommend that you read our Privacy Policy.
      </p>

      <h2>9. Modification of the present Terms of Service</h2>
      <p>
        example.com reserves the right to modify its ToS at any time. In this case, example.com will publish the new versions of the ToS on the Platform's pages and will alert Users by means of a notification.
      </p>

      <h2>10. Miscellaneous</h2>
      <p>
        In the event that all or part of the provisions of the ToS are deemed illegal, unenforceable, or inapplicable by a court decision, the other provisions or agreements shall remain applicable, provided that the general scheme of the contract is not disrupted. The invalid provision shall be replaced by a valid provision that comes as close as possible to the economic purpose pursued by the Parties. This Agreement, together with the Privacy Policy, constitutes the entire agreement between the Parties.
      </p>

      <h2>11. Applicable Laws and Jurisdiction</h2>
      <p>
        For any claim or dispute, the user is invited in priority to contact example.com at contact@example.com to reach an amicable solution. The present Terms are subject to Dutch. Any dispute not resolved by the means indicated above will be submitted to the competent court corresponding to the place of residence of the User located
      </p>
  </main>
)
