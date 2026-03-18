import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Order "mo:core/Order";

actor {
  type ContactForm = {
    companyName : Text;
    contactName : Text;
    email : Text;
    phone : Text;
    message : Text;
    budgetRange : Text;
  };

  type ImpactMetrics = {
    totalLivesImpacted : Nat;
    projectsCompleted : Nat;
    partnerCompanies : Nat;
    statesCovered : Nat;
  };

  type CaseStudy = {
    title : Text;
    category : Text;
    description : Text;
    location : Text;
    outcomeMetrics : Text;
  };

  type ProjectUpdate = {
    id : Nat;
    projectName : Text;
    status : Text;
    fundUtilization : Nat;
    description : Text;
  };

  type NewsletterSignup = {
    email : Text;
    companyName : Text;
  };

  module ContactForm {
    public func compare(form1 : ContactForm, form2 : ContactForm) : Order.Order {
      switch (Text.compare(form1.companyName, form2.companyName)) {
        case (#equal) { Text.compare(form1.contactName, form2.contactName) };
        case (order) { order };
      };
    };

    public func compareByEmail(form1 : ContactForm, form2 : ContactForm) : Order.Order {
      Text.compare(form1.email, form2.email);
    };
  };

  module CaseStudy {
    public func compare(
      case1 : CaseStudy,
      case2 : CaseStudy,
    ) : Order.Order {
      switch (Text.compare(case1.category, case2.category)) {
        case (#equal) { Text.compare(case1.title, case2.title) };
        case (order) { order };
      };
    };

    public func compareByTitle(
      case1 : CaseStudy,
      case2 : CaseStudy,
    ) : Order.Order {
      Text.compare(case1.title, case2.title);
    };
  };

  module ProjectUpdate {
    public func compare(
      update1 : ProjectUpdate,
      update2 : ProjectUpdate,
    ) : Order.Order {
      Text.compare(update1.projectName, update2.projectName);
    };
  };

  let contactForms = Map.empty<Text, ContactForm>();
  let caseStudies = Map.empty<Nat, CaseStudy>();
  var currentImpactMetrics : ImpactMetrics = {
    totalLivesImpacted = 0;
    projectsCompleted = 0;
    partnerCompanies = 0;
    statesCovered = 0;
  };
  var nextCaseStudyId = 0;
  var nextProjectUpdateId = 0;

  let projectUpdates = Map.empty<Nat, ProjectUpdate>();
  let newsletterSignups = Map.empty<Text, NewsletterSignup>();

  public shared ({ caller }) func submitContactForm(
    companyName : Text,
    contactName : Text,
    email : Text,
    phone : Text,
    message : Text,
    budgetRange : Text,
  ) : async () {
    let form : ContactForm = {
      companyName;
      contactName;
      email;
      phone;
      message;
      budgetRange;
    };
    contactForms.add(email, form);
  };

  public shared ({ caller }) func addCaseStudy(
    title : Text,
    category : Text,
    description : Text,
    location : Text,
    outcomeMetrics : Text,
  ) : async () {
    let caseStudy : CaseStudy = {
      title;
      category;
      description;
      location;
      outcomeMetrics;
    };
    caseStudies.add(nextCaseStudyId, caseStudy);
    nextCaseStudyId += 1;
  };

  public shared ({ caller }) func updateImpactMetrics(
    totalLivesImpacted : Nat,
    projectsCompleted : Nat,
    partnerCompanies : Nat,
    statesCovered : Nat,
  ) : async () {
    currentImpactMetrics := {
      totalLivesImpacted;
      projectsCompleted;
      partnerCompanies;
      statesCovered;
    };
  };

  public shared ({ caller }) func addProjectUpdate(
    projectName : Text,
    status : Text,
    fundUtilization : Nat,
    description : Text,
  ) : async () {
    let update : ProjectUpdate = {
      id = nextProjectUpdateId;
      projectName;
      status;
      fundUtilization;
      description;
    };
    projectUpdates.add(nextProjectUpdateId, update);
    nextProjectUpdateId += 1;
  };

  public shared ({ caller }) func signupNewsletter(
    email : Text,
    companyName : Text,
  ) : async () {
    if (newsletterSignups.containsKey(email)) { Runtime.trap("This email is already signed up for the newsletter.") };
    let signup : NewsletterSignup = {
      email;
      companyName;
    };
    newsletterSignups.add(email, signup);
  };

  public query ({ caller }) func getAllContactForms() : async [ContactForm] {
    contactForms.values().toArray().sort();
  };

  public query ({ caller }) func getContactFormsByEmail() : async [ContactForm] {
    contactForms.values().toArray().sort(ContactForm.compareByEmail);
  };

  public query ({ caller }) func getCaseStudies() : async [CaseStudy] {
    caseStudies.values().toArray().sort();
  };

  public query ({ caller }) func getCaseStudiesByTitle() : async [CaseStudy] {
    caseStudies.values().toArray().sort(CaseStudy.compareByTitle);
  };

  public query ({ caller }) func getImpactMetrics() : async ImpactMetrics {
    currentImpactMetrics;
  };

  public query ({ caller }) func getProjectUpdates() : async [ProjectUpdate] {
    projectUpdates.values().toArray().sort();
  };

  public query ({ caller }) func getAllNewsletterSignups() : async [NewsletterSignup] {
    newsletterSignups.values().toArray();
  };
};
