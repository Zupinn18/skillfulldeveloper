import React from 'react'
import TermImg from "../assets/terms.gif";
import PrivacyBgWhite from "../assets/privacybg-white.png";
import PrivacyBgDark from "../assets/privacybg-dark.png";
import { Link } from 'react-router-dom';

const PrivacyPolicy = ({toggle}) => {
  return (
    <div className=' w-full' >
      {
        toggle && (
        <div className=' relative font-poppins ' >
          <img src={PrivacyBgDark} />
          <div className=' absolute top-[30%] left-[10%] flex flex-col gap-2 ' >
          <h2 className={` text-center sm:text-4xl md:text-6xl font-poppins font-bold ${toggle === false ? "text-white" : "text-white"}`}>Privacy Policy</h2>
          <h2 className={` text-center text-lg font-poppins ${toggle === false ? "text-white" : "text-white"}`}>We value your privacy...</h2>
          </div>
      </div>
      )
      }
      {
        !toggle && (
        <div  className=' relative font-poppins ' >
          <img src={PrivacyBgWhite} />
          <div className=' absolute top-[30%] left-[10%] flex flex-col gap-2 ' >
          <h2 className={` text-center sm:text-4xl md:text-6xl font-poppins font-bold ${toggle === false ? "text-white" : "text-white"}`}>Privacy Policy</h2>
          <h2 className={` text-center text-lg font-poppins ${toggle === false ? "text-white" : "text-white"}`}>We value your privacy...</h2>
          </div>
      </div>
      )
      }
      <div className=' w-11/12 mx-auto flex flex-col gap-[50px] mb-10 ' >
        <div className=' flex flex-col gap-4 mt-[50px]' >
          <div className=' flex gap-[50px] items-center flex-col md:flex-row ' >
              <p className={` text-center text-lg text-semibold mb-5 leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `}>
              Skillfull developer is committed to protection and management of
                personal data for efficient functioning to ensure the benefit of our stakeholders,
                customers and for the community. Thus, it is imperative that people’s privacy is
                safeguarded through lawful and appropriate means for handling personal data.
                Therefore, we have implemented this privacy policy (here in after referred to as
                ‘‘policy’’).
                  </p>
          </div>
          </div>

          <div className=' w-full flex justify-between items-start gap-[50px] ' >
                  {/* <div className=' w-[60%] flex flex-col gap-5 bg-white rounded-md px-6 py-6 ' >
                      <h2 className={` text-start text-xl font-bold leading-6 ${toggle === false ? "text-[#436860]" : "text-[#436860]"} `} >Legal Information</h2>

                      <div className=' flex flex-col items-center justify-center gap-3 ' >
                          <Link to="/refund" onClick={() => window.scrollTo(0, 0)} > 
                            <button className=' text-sm block font-semibold px-4 py-2 rounded-lg bg-[#436850] transition-all duration-300
              border-2 text-white cursor-pointer hover:bg-[#12372A] border-none ' >Fee Refund</button>
                          </Link>
                          <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} > 
                            <button className=' text-sm block font-semibold px-4 py-2 rounded-lg bg-[#436850] transition-all duration-300
              border-2 text-white cursor-pointer hover:bg-[#12372A] border-none ' >Privacy Policy</button>
                          </Link>
                          <Link to="/terms-and-conditions" onClick={() => window.scrollTo(0, 0)} > 
                            <button className=' text-sm block font-semibold px-4 py-2 rounded-lg bg-[#436850] transition-all duration-300
              border-2 text-white cursor-pointer hover:bg-[#12372A] border-none ' >Terms & Conditions</button>
                          </Link>
                      </div>
                  </div> */}
                  <div className=' flex flex-col gap-5 ' >
          {/* <h2 className={` text-xl text-center font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Key Features of React</h2> */}
          <ul className={` flex flex-col gap-5 list-disc ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Aim :</strong> This policy aims to protect personal data of the various stakeholders
                      connected to Skilfull developer. This policy is aimed at providing individuals notice
                      of the basic principles by which the company processes the personal data of
                      individuals (“Personal Data”) who visit, use, deal with and/or transacts through
                      the website and includes a guest user and browser (hereinafter ‘you’, ‘user’)</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Purpose :</strong> The purpose of this policy is to describe how Skilful developer collects,
                                  uses, and shares information about you through our online interfaces (e.g.,
                                  websites and mobile applications) owned and controlled by us, including but not
                                  limited to <a href='https://skillfulldeveloper.com/' className={` underline font-semibold ${toggle === false ? "text-[#436860]" : "text-slate-200"}`} >https://skillfulldeveloper.com/</a>. This policy
                                  is also designed to provide information on how Skilful developer ensures data
                                  security, conducts data transfers and process requests from data subjects.
                                  <br/> <br/>
                                  This policy control applies to all systems, people and processes that comprise the
                                Skillfull developer’s information systems, including board members, directors,
                                employees and other third parties who have access to Personal Data available
                                within Skilful developer. <br/> <br/>
                                The company is also committed to ensure that its employees conduct themselves
                                in line with this, and other related, policies.
<br/>
                                Skilful developer offers curated and specially designed higher education and
                                industry-relevant certification programs online (“hereinafter individually or
                                collectively referred to as Program”). This Privacy Policy applies to all our services
                                unless specified otherwise.                               
                                  </p>
            </li>

            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Personal Data collected :</strong> The Personal Data that we collect about you depends on
                the context of your interactions with us, the products, services and features that
                you use, your location, and the applicable laws.<br/>
                Personal Data is stored in personnel files or within the electronic records of Skilful
                developer. The following types of Personal Data may be held by the Company, as
                appropriate, on relevant individuals:
                <ul className=' mt-3 ml-10 flex flex-col gap-3 list-decimal ' >
                  <li >
                    Personal Identification Data
                    <ul className=' ml-5 list-disc ' >
                      <li>First Name, Last name</li>
                      <li>Job title & Company</li>
                      <li>Signature</li>
                      <li>Photograph</li>
                    </ul>
                  </li>
                  <li >
                    Identification Data
                    <ul className=' ml-5 list-disc ' >
                      <li>Social security or tax identification numbers</li>
                      <li>Aadhar number and PAN</li>
                    </ul>
                  </li>
                  <li >
                  Personal Characteristics
                    <ul className=' ml-5 list-disc ' >
                        <li>Age</li>
                        <li>Gender</li>
                        <li>Date of Birth</li>
                        <li>Marital Status</li>
                        <li>Nationality</li>
                    </ul>
                  </li>
                  <li >
                  Contact Data
                    <ul className=' ml-5 list-disc ' >
                      <li>Postal address</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                    </ul>
                  </li>
                  <li >
                  Education and Recruitment Data
                    <ul className=' ml-5 list-disc ' >
                      <li>Educational qualification(s)</li>
                      <li>Working goals</li>
                      <li>Post-qualification experience</li>
                    </ul>
                  </li>
                  <li >
                   Electronic Identification Data
                    <ul className=' ml-5 list-disc ' >
                    <li>Login credentials (If you are a registered user)</li>
                    <li>Visitors IP Data</li>
                    <li>Date and time of website visit</li>
                    <li>Pages visited and navigation on the website</li>
                    <li>Browser being used</li>
                    <li>Country of accessing website</li>
                    <li>Language of the browser being used</li>
                    <li>Words searched for</li>
                    <li>Pixel tags</li>
                    </ul>
                  </li>
                  <li >
                  Inquiries
                    <ul className=' ml-5 list-disc ' >
                    <li>Personal Data stated in the form – for example: Name, address, phone number, country</li>
  <li>Subject of Inquiry</li>
  <li>Personal details (Name on the card, billing address)</li>
  <li>Payment details (card numbers, card type)</li>
  <li>Recordings of calls with students and users showing interest in our Program</li>
  <li>Information about your interactions with customer service and maintenance interactions with us</li>
                    </ul>
                  </li>
                  <li >
                  User Generated Data
                    <ul className=' ml-5 list-disc ' >
                    <li>Projects and Assignments submitted</li>
  <li>Peer feedback and grading</li>
  <li>Program performance data</li>
  <li>Response to quizzes, standalone quizzes, exams, and surveys</li>
  <li>Web Cam Recordings (during assessments related to online courses)</li>
  <li>Posts made to public forums through our platform</li>
  <li>Any other information necessary to ensure conformity with test/assessment rules, area of interests</li>
                    </ul>
                  </li>
                  <li >
                  Marketing Data
                    <ul className=' ml-5 list-disc ' >
                      <li>Your preferences in receiving marketing information from us</li>
                      <li>Working goals</li>
                      <li>Your communication preferences</li>
                    </ul>
                  </li>
                  <li >
                  Behavioral Data
                    <ul className=' ml-5 list-disc ' >
                      <li>Data inferred or assumed information relating to your behavior and interests
                          based on your online activity on our site
                          </li>
                      <li>We do not collect any payments information processed by third-party payment
                          gateway providers.</li>
                    </ul>
                  </li>
                  <li >
                  Special Categories of Personal Data
                    <ul className=' ml-5 list-disc ' >
                      <li>Special Category of Personal Data includes details about your race or ethnicity,
religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade
unions memberships, information about your health and genetic and biometric data.
We do not collect or process any special or sensitive Personal Data.</li>
                    </ul>
                  </li>
                  <li >
                  Sources of data collection
                    <ul className=' ml-5 list-disc ' >
                    <li>The data collected by the company is derived directly from the data provided by the
                        user or by use of our site.</li>
                    </ul>
                  </li>
                  <li >
                  Data Collected when You
                    <ul className=' ml-5 list-disc ' >
                    <li>Register for various seminars, webinars or any other outreach initiatives made available by us or Educational Partner’s offline activities</li>
                    <li>Request a quote for the various products and services offered by us</li>
                    <li>Place a feedback, complete any customer surveys circulated or interact with our customer services online</li>
                    <li>View our services or visit our website pages on the internet</li>
                    <li>Browse our website</li>
                    <li>When you appear for assignments, exams or any other assessments in relation to online course</li>
                    </ul>
                  </li>
                  <li >
                  Data Collected from third parties
                    <ul className=' ml-5 list-disc ' >
                    <li>We receive Personal Data such as access or login details, profile picture or any
                        other text / image in relation to your Personal Data which may be available with
                        such third parties.<br/>
                        We also receive information about your visits to this platform and to other
                        websites using pixel tags.<br/>
                        Third parties from whom we receive your Personal Data include, our service
                        providers, other networks connected to our service, our advertising partners, our
                        marketing and advertising affiliates, our educational partners, scholarship
                        providers, analytics providers, recruiters and such other third-party sources.</li>
                    </ul>
                  </li>
                </ul>
</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Cookies :</strong> Cookies are text files placed on your computer to collect standard Internet log
                              information and visitor behavior information. When you visit our websites, we
                              may collect information from you automatically through cookies or similar
                              technology.<br/>
                              Furthermore, we may allow third-party advertising companies (such as
                              Facebook, Google, Twitter, Quora and Bing) to place cookies on our website.
                              These cookies enable such companies to track your activity across various sites
                              where they display Ads and record your activities, so they can show Ads that
                              they consider relevant to you as you browse the Internet. These cookies store
                              information about the content you are browsing, together with an identifier linked
                              to your device or IP address.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Data Analytics :</strong> We use Analytics tools and search information providers to measure how visitors
interact with content on our website. We also use Facebook Custom Audiences to ask
Facebook to show you ads that are customized based on your interaction with our
websites or our Facebook applications and to measure how you interact with those ads.
Additional information on how these services use such technologies can be found on
Google’s website, Adobe’s website and Facebook’s website.
</p>
            </li>

            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Aggregated Data :</strong> “Aggregated Data” means records that have been stripped of Personal Data and has
been manipulated or combined to provide generalized, anonymous information. Your
identity and personal information are not available in Aggregated Data. We combine
your Personal Data on an anonymous basis with other information to generate
Aggregated Data for internal and commercial use and for sharing with affiliates,
subsidiaries and business partners for planning and marketing purposes.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Data protection principles :</strong> Where third parties process data on behalf of Skilfull developer we endeavor to obtain
                assurances from such third parties that your Personal Data will be safeguarded
                consistently. We understand that it will be accountable for the processing, management
                and regulation, and storage and retention of all Personal Data held in the form of
                manual records and on computers. <br/>
                All Personal Data obtained and held by the Company will:
                <ul className=' ml-10 mt-5 list-disc ' >
                <li>Be processed fairly, lawfully and in a transparent manner</li>
                <li>Be collected for specific, explicit, and legitimate purposes</li>
                <li>Be adequate, relevant and limited to what is necessary for the purposes of processing</li>
                <li>Be kept accurate and up to date. Every reasonable effort will be made to ensure that inaccurate data is rectified or erased without delay</li>
                <li>Not be kept for longer than is necessary for its given purpose</li>
                <li>Be processed in a manner that ensures appropriate security of Personal Data, including protection against unauthorized or unlawful processing, accidental loss, destruction or damage by using appropriate technical or organizational measures</li>
                <li>Comply with the relevant laws and procedures for international transferring of Personal Data applicable to us</li>
                                    </ul>
</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Legal basis for processing your Personal Data :</strong> Certain jurisdictions require that we have a lawful basis to justify our processing of your Personal Data. <br/>
                Where applicable, the lawful basis that skilfull developer relies upon to justify a
                particular processing activity may differ from the lawful basis used to justify a different
                processing activity. <br/>
                skilfull developer relies on the following lawful basis to process Personal Data, as
                permitted under applicable law: <br/>
                <ul className=' ml-10 list-disc '  >
                <li>Processing necessary for the negotiation, execution, or performance of contracts</li>
                  <li>Processing to comply with legal and regulatory obligations</li>
                  <li>Processing in furtherance of our legitimate interests, including our interests to conduct legitimate business activities (such as improving our products and services, to communicate with you, to secure our systems, among other legitimate interests)</li>
                  <li>Processing necessary to protect the vital interest of a user or any other natural person</li>
                  <li>Processing necessary for public interest</li>
                  <li>Processing based on your consent</li>
                </ul>
</p>
            </li>

            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Consent :</strong> We may obtain your consent to collect and use certain types of Personal Data when we
                  are required to do so by law.
                  Once consent is obtained from the individual to use his or her information for those
                  purposes, upGrad has the individual’s implied consent to collect or receive any
                  supplementary information that is necessary to fulfil the same purposes. Express
                  consent will also be obtained if, or when, a new use is identified. <br/>
                  Consent may also be implied where a user is given notice and a reasonable opportunity
                  to opt-out of his or her personal information being used for mail-outs, the marketing of
                  new services or products, and the client, customer, member does not opt-out.
                  Subject to certain exceptions (e.g., the personal information is necessary to provide the
                  service or product, or the withdrawal of consent would frustrate the performance of a
                  legal obligation), individuals can withhold or withdraw their consent for skilfull developer
                  to use their personal information in certain ways.<br/><br/>
                  Further, by using this website/ acknowledging this privacy policy / by voluntarily
                  providing us with your Personal Data, you consent to collection, storage, and
                  processing of your Personal Data in accordance with this privacy policy and our Terms
                  of Service.<br/><br/>
                  If you refuse or withdraw your consent, or if you choose not to provide us with any
                  required Personal Data, we may not be able to provide you the services that can be
                  offered on our Platform.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Purpose of collecting Personal Data :</strong> We collect your Personal Data for the following purposes: <br/>
                              To fulfil or meet the reason you provided the information; <br/>
                We use your information for managing and processing purposes, including, but not
                limited to, tracking attendance, progress and completion of a Program. As part of our
                management and processing of the Program, we will use certain Personal Data to
                administer exams, projects, and other assessments for the Program. For example, as
                part of an exam, skillful developer may use certain information collected from you in
                order to verify your identity or to monitor your performance during the exam to confirm
                that you are abiding by the applicable testing rules or requirements; <br/>
                To send you updates about the Programs, other upGrad events, platform maintenance
                or new services provided by upGrad, among other things, through itself or through third
                parties, via WhatsApp, email, SMS, phone call or any other medium;
                Provide Chat Room services; <br/>
                To enhance the quality of our content and product offerings; <br/>
                Compliance with security and other mandatory policies and building access;
                Providing information to relevant external authorities for tax, social security and other
                purposes as legally required; <br/>
                Conducting surveys to assess your satisfaction, including but not limited to its
                processes or policies;
                Setting up and maintaining accounts and subscriptions with third parties that provide
                information and research services or communication services; <br/>
                Making decisions about your continued engagement, employment, or membership; <br/>
                Dealing with legal or regulatory disputes or investigations involving you, our work, or
                other partners, employees, workers, and contractors, including accidents at work,
                potential and actual negligence claims, and professional discipline matters;
                To monitor use of our information and communication systems to ensure compliance
                with our IT and document management policies; <br/>
                To ensure network and information security, including preventing unauthorized access
                to our computer and electronic communications systems and preventing malicious
                software distribution; <br/>
                Business management and planning, including accounting, auditing, and insuring;
                Planning or reviewing options in relation to the operation or management;
                Keeping registers required by law or regulation; <br/>
                Communicating with you, for example, to respond to inquiries;
                Enhancing the safety and security of the services and preventing fraud, or protecting
                our or our customers’, or your rights or property; <br/>
                Enforcing applicable terms and conditions and other applicable policies.
              
              </p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Advertising and Marketing :</strong> We strive to provide you with choices regarding certain Personal Data uses, particularly
around marketing and advertising. You will receive marketing communications from us if
you have requested information from us or if you provided us with your details and
expressly consented to receiving that marketing.<br/><br/>
We may use your Personal Identification, Identity, Contact, Electronic and User
generated Data to form a view on what we think you may want or need, or what may be
of interest to you. This is how we decide which services and offers may be relevant for
you.<br/><br/>
We also enter into agreements with third parties to serve Ads on our behalf across the
internet, social networking sites and blogs. These third parties may collect Personal
Data about your visits to our platform and your interactions with our products and use
this information to target advertisements for goods and services.<br/><br/>
Where electronic direct marketing communications are being sent, you have the option
to opt-out in each communication sent, and this choice will be recognized and adhered
to by us.
</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Data subject rights :</strong> Some jurisdictions have provided individuals with certain rights in relation to the
              processing of their Personal Data. These rights are not available to everyone, and they do not necessarily apply in all contexts. Depending on applicable law, you may have the right to:
              <ul className=' ml-10 list-disc ' >
              <li>Request access to your Personal Data</li>
                <li>Request correction of your Personal Data (should your Personal Data be inaccurate, incomplete, or obsolete)</li>
                <li>Request deletion of your Personal Data</li>
                <li>Withdraw your consent to processing (where we processed Personal Data on the basis of your consent). Please note that withdrawing your consent applies only to future processing activities</li>
                <li>Object to the processing of your Personal Data</li>
                <li>Request restrictions on the processing of your Personal Data</li>
                <li>Request the transfer of your Personal Data to you or a third party</li>
                <li>Opt-out of certain transfers to third parties</li>
                <li>Request to opt out of automated decision making</li>
              </ul>
</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Our Policy on Children Data :</strong> Children data privacy is important to us. Our Sites are not intended for children Age to
              constitute a user as children is different for different jurisdictions. The age (for valid
              consent) of children varies across jurisdictions. As a general policy, our company does
              not engage in the collection, processing, storage, use, dissemination, and transfer of
              Personal Data of children. <br/><br/>
              In case such a collection becomes necessary for the performance of our contractual
              obligations, or when required under the concerned law, we shall notify you in a timebound and appropriate manner, informing the purposes and reasons for such collection
              and seek your explicit consent, and where applicable, parental authorization, prior to the
              processing of such data. <br/><br/>
              We will take appropriate steps to delete any Personal Data of children that has been
              collected on our website without verified parental consent upon learning of the existence
              of such Personal Data, subject to conditions stipulated in the laws of applicable
              jurisdiction.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Data Security :</strong> Skilfull developer will ensure that appropriate technical and organizational measures are
              in place, supported by privacy impact and risk assessments, to ensure a high level of
              security for Personal Data, and secure environment for information held both manually
              and electronically.<br/>
              Skilfull developer implements appropriate security measures designed to prevent
              unlawful or unauthorized processing of personal information and accidental loss of or
              damage to personal information. Skilfull developer maintains written security
              management policies and procedures designed to prevent, detect, contain, and correct
              violations of measures taken to protect the confidentiality, integrity, availability, or
              security of your Personal Information. These policies and procedures assign specific
              data security responsibilities and accountabilities to specific individuals, include a risk
              management program that includes periodic risk assessment and provide an adequate
              framework of controls that safeguard your personal information. <br/><br/>
              In addition, as part of its organizational security measures, employees at Skilfull
              developer must: <br/><br/>
              ensure that all files or written information of a confidential nature are stored in a secure
              manner and are only accessed by people who have a need and a right to access them
              ensure that all files or written information of a confidential nature are not left where they
              can be read by unauthorized people
              check regularly on the accuracy of data being entered into computers
              always use the passwords provided to access the computer system cautiously and such
              access should not be circulated, unless absolutely necessary
              use computer screen blanking to ensure that Personal Data is not left on screen when
              not in use. <br/><br/>
              Personal Data should not be kept or transported on laptops, USB sticks, or similar
              devices, unless authorized by us. Where Personal Data is recorded on any
              such device it should be protected by:
              <ul className=' ml-10 list-disc ' >
              <li>Ensuring that data is recorded on such devices only where absolutely necessary</li>
              <li>Using an encrypted system — a folder should be created to store the files that need extra protection and all files created or moved to this folder should be automatically encrypted</li>
              <li>Ensuring that laptops or USB drives are not left lying around where they can be stolen</li>
              <li>Failure to follow the Company’s rules on data security may be dealt with via the Company’s disciplinary procedure. Appropriate sanctions include dismissal with or without notice dependent on the severity of the failure</li>
              <li>We also take steps to ensure that our service providers, contractors, and other third parties maintain similar levels of data protection measures when processing your Personal Data</li>
              <li>While we strive to secure your Personal Data, please note that 100% security of Personal Data cannot be guaranteed and that upGrad shall not be liable for any misuse or loss of Personal Data carried out by third-party cloud service providers</li>
              </ul>
</p>
            </li>

            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Records management :</strong>
Records management refers to a set of activities required for systematically
controlling the creation, distribution, use, maintenance, and disposition of
recorded information maintained as evidence of business activities and
transactions. It is impossible to be compliant with information law without robust
records management policies and practices. Good records management
practices ensure not only record quality, but that Personal Data is only kept for as
long as necessary for its original purpose and help support data minimization.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Conflicts of Law :</strong>
 This Policy is intended to comply with the laws and regulations in the place of
establishment and of the countries in which company operates. In the event of any
conflict between this Policy and applicable laws and regulations, the latter shall
prevail.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Retention of Personal Data :</strong> We retain your Personal Data, not longer than necessary for the purposes for which
it was collected. The length of time to retain Personal Data depends on the purposes
for which we collect and use it and/or as may be required to comply with applicable
laws, to establish, exercise, or defend our legal rights. <br/>
The users can exercise their rights enumerated herein. Also, if in case required to
extend the period of retention of such data, we shall obtain your consent for the
same. Further, we may also dispose the data prior to completion of the period of
retention, if the purpose for which it was collected is exhausted.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Updates to this policy :</strong>
We may update our Privacy Policy from time to time. We will take reasonable steps
to inform all Skilfull developer Customers, Business Partners, and other data
subjects affected by the revisions by posting the new Privacy Policy on this page
and/or via email.
</p>
            </li>
           
          </ul>
          </div>
          </div>

    </div>
    </div>
  )
}


export default PrivacyPolicy