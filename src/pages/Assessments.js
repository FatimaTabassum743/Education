import React, { useState } from 'react';
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Play, 
  Award,
  BookOpen,
  Target,
  Users,
  Calendar,
  BarChart3,
  X,
  Save
} from 'lucide-react';
import emailjs from 'emailjs-com';

const Assessments = () => {
  const [selectedAssessment, setSelectedAssessment] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isTestActive, setIsTestActive] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const [completedAssessments, setCompletedAssessments] = useState([]);
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pendingResults, setPendingResults] = useState(null);

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_lzv0n76';
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_hywc48o';
  const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID || '92m3Tvs-ztcNiRG6X';

  const assessments = [
    {
      id: 1,
      title: "HTML Fundamentals Quiz",
      description: "Test your knowledge of HTML basics, tags, and structure",
      category: "Web Development",
      duration: "30 minutes",
      questions: 20,
      difficulty: "Beginner",
      passingScore: 70,
      questionsList: [
        {
          id: 1,
          question: "What does HTML stand for?",
          options: [
            "HyperText Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlink and Text Markup Language"
          ],
          correctAnswer: 0
        },
        {
          id: 2,
          question: "Which HTML tag is used to define a paragraph?",
          options: ["<p>", "<paragraph>", "<text>", "<para>"],
          correctAnswer: 0
        },
        {
          id: 3,
          question: "What is the correct HTML element for inserting a line break?",
          options: ["<break>", "<br>", "<lb>", "<linebreak>"],
          correctAnswer: 1
        },
        {
          id: 4,
          question: "Which HTML attribute specifies an alternate text for an image?",
          options: ["title", "alt", "src", "href"],
          correctAnswer: 1
        },
        {
          id: 5,
          question: "What is the correct HTML for creating a hyperlink?",
          options: [
            '<a href="http://www.example.com">Example</a>',
            '<a url="http://www.example.com">Example</a>',
            '<a link="http://www.example.com">Example</a>',
            '<a>http://www.example.com</a>'
          ],
          correctAnswer: 0
        }
      ]
    },
    {
      id: 2,
      title: "CSS Styling Assessment",
      description: "Evaluate your CSS knowledge and styling techniques",
      category: "Web Development",
      duration: "45 minutes",
      questions: 25,
      difficulty: "Intermediate",
      passingScore: 75,
      questionsList: [
        {
          id: 1,
          question: "Which CSS property controls the text size?",
          options: ["text-size", "font-size", "size", "text-style"],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "How do you add a background color for all <h1> elements?",
          options: [
            "h1 {background-color:#FFFFFF;}",
            "h1.all {background-color:#FFFFFF;}",
            "all.h1 {background-color:#FFFFFF;}",
            "h1 {bgcolor:#FFFFFF;}"
          ],
          correctAnswer: 0
        },
        {
          id: 3,
          question: "Which CSS property is used to change the text color of an element?",
          options: ["text-color", "color", "fgcolor", "foreground-color"],
          correctAnswer: 1
        },
        {
          id: 4,
          question: "Which CSS property controls the space between elements?",
          options: ["margin", "padding", "border", "spacing"],
          correctAnswer: 0
        },
        {
          id: 5,
          question: "How do you make each word in a text start with a capital letter?",
          options: [
            "text-transform:capitalize",
            "text-transform:uppercase",
            "text-style:capitalize",
            "text-case:capitalize"
          ],
          correctAnswer: 0
        }
      ]
    },
    {
      id: 3,
      title: "JavaScript Basics Test",
      description: "Test your JavaScript programming fundamentals",
      category: "Web Development",
      duration: "60 minutes",
      questions: 30,
      difficulty: "Intermediate",
      passingScore: 80,
      questionsList: [
        {
          id: 1,
          question: "How do you declare a variable in JavaScript?",
          options: [
            "var variableName;",
            "v variableName;",
            "variable variableName;",
            "declare variableName;"
          ],
          correctAnswer: 0
        },
        {
          id: 2,
          question: "Which operator is used to assign a value to a variable?",
          options: ["*", "=", "-", "x"],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "How do you write an IF statement in JavaScript?",
          options: [
            "if (i == 5)",
            "if i == 5 then",
            "if i = 5",
            "if i = 5 then"
          ],
          correctAnswer: 0
        },
        {
          id: 4,
          question: "How do you create a function in JavaScript?",
          options: [
            "function myFunction()",
            "function:myFunction()",
            "function = myFunction()",
            "function => myFunction()"
          ],
          correctAnswer: 0
        },
        {
          id: 5,
          question: "How do you call a function named 'myFunction'?",
          options: [
            "call myFunction()",
            "call function myFunction()",
            "myFunction()",
            "function myFunction()"
          ],
          correctAnswer: 2
        }
      ]
    },
    {
      id: 4,
      title: "Python Programming Quiz",
      description: "Test your Python programming knowledge and skills",
      category: "Programming",
      duration: "50 minutes",
      questions: 25,
      difficulty: "Beginner",
      passingScore: 70,
      questionsList: [
        {
          id: 1,
          question: "What is the correct way to create a function in Python?",
          options: [
            "function myFunction():",
            "def myFunction():",
            "create myFunction():",
            "func myFunction():"
          ],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "Which method can be used to remove any whitespace from the beginning or the end of a string?",
          options: ["strip()", "trim()", "len()", "ptrim()"],
          correctAnswer: 0
        },
        {
          id: 3,
          question: "What is the correct file extension for Python files?",
          options: [".pt", ".pyt", ".py", ".pyth"],
          correctAnswer: 2
        },
        {
          id: 4,
          question: "How do you start writing an if statement in Python?",
          options: ["if x > y:", "if (x > y)", "if x > y then:", "if x > y then"],
          correctAnswer: 0
        },
        {
          id: 5,
          question: "Which method can be used to return a string in upper case letters?",
          options: ["upper()", "uppercase()", "upperCase()", "toUpperCase()"],
          correctAnswer: 0
        }
      ]
    },
    {
      id: 5,
      title: "React.js Fundamentals",
      description: "Test your React.js knowledge and component understanding",
      category: "Web Development",
      duration: "40 minutes",
      questions: 20,
      difficulty: "Advanced",
      passingScore: 75,
      questionsList: [
        {
          id: 1,
          question: "What is React.js?",
          options: [
            "A JavaScript library for building user interfaces",
            "A programming language",
            "A database management system",
            "A web server"
          ],
          correctAnswer: 0
        },
        {
          id: 2,
          question: "Which hook is used to manage state in functional components?",
          options: ["useState", "useEffect", "useContext", "useReducer"],
          correctAnswer: 0
        },
        {
          id: 3,
          question: "How do you pass data from parent to child component?",
          options: ["Props", "State", "Context", "Redux"],
          correctAnswer: 0
        },
        {
          id: 4,
          question: "What is JSX?",
          options: [
            "A syntax extension for JavaScript",
            "A new programming language",
            "A database query language",
            "A styling framework"
          ],
          correctAnswer: 0
        },
        {
          id: 5,
          question: "Which method is used to render React components?",
          options: ["render()", "ReactDOM.render()", "component()", "display()"],
          correctAnswer: 1
        }
      ]
    }
  ];

  const startAssessment = (assessment) => {
    setSelectedAssessment(assessment);
    setCurrentQuestion(0);
    setAnswers({});
    setIsTestActive(true);
    setTestResults(null);
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
    setAnswers({
      ...answers,
      [questionId]: answerIndex
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < selectedAssessment.questionsList.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitAssessment = () => {
    const totalQuestions = selectedAssessment.questionsList.length;
    let correctAnswers = 0;

    selectedAssessment.questionsList.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    const score = Math.round((correctAnswers / totalQuestions) * 100);
    const passed = score >= selectedAssessment.passingScore;

    // Store results in pendingResults
    const results = {
      score,
      correctAnswers,
      totalQuestions,
      passed,
      answers: { ...answers }
    };

    setPendingResults(results);
    setShowSubmissionModal(true);

    if (passed && !completedAssessments.includes(selectedAssessment.id)) {
      setCompletedAssessments([...completedAssessments, selectedAssessment.id]);
    }
  };

  const handleSubmitResults = async () => {
    // setPendingResults(results);
    setShowSubmissionModal(true);
    if (!studentInfo.name || !studentInfo.email) {
      alert('Please fill in both name and email');
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare assessment data
      const assessmentData = {
        id: Date.now(),
        studentName: studentInfo.name,
        studentEmail: studentInfo.email,
        assessmentTitle: selectedAssessment.title,
        assessmentCategory: selectedAssessment.category,
        score: pendingResults.score,
        correctAnswers: pendingResults.correctAnswers,
        totalQuestions: pendingResults.totalQuestions,
        passed: pendingResults.passed,
        completedAt: new Date().toLocaleString(),
        questionsAndAnswers: selectedAssessment.questionsList.map(question => ({
          question: question.question,
          studentAnswer: pendingResults.answers[question.id] !== undefined 
            ? question.options[pendingResults.answers[question.id]] 
            : 'Not answered',
          correctAnswer: question.options[question.correctAnswer],
          isCorrect: pendingResults.answers[question.id] === question.correctAnswer
        }))
      };

      // Send assessment results via email FIRST
      const templateParams = {
        from_name: studentInfo.name,
        from_email: studentInfo.email,
        phone: 'Not provided',
        age: 'Not provided',
        country: 'Not provided',
        course: selectedAssessment.title,
        message: `Assessment Results:
        
Assessment: ${selectedAssessment.title}
Category: ${selectedAssessment.category}
Score: ${pendingResults.score}/${pendingResults.totalQuestions} (${Math.round((pendingResults.score/pendingResults.totalQuestions)*100)}%)
Status: ${pendingResults.passed ? 'PASSED' : 'FAILED'}
Correct Answers: ${pendingResults.correctAnswers}/${pendingResults.totalQuestions}

Detailed Results:
${assessmentData.questionsAndAnswers.map((qa, index) => 
  `${index + 1}. ${qa.question}
   Student Answer: ${qa.studentAnswer}
   Correct Answer: ${qa.correctAnswer}
   Result: ${qa.isCorrect ? '✓ Correct' : '✗ Incorrect'}
  `
).join('\n')}`,
        is_demo: 'Assessment Submission',
        to_name: 'Fiesta EdTech Team'
      };

      // Send email first - this is the most important part
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );

      // Only after successful email, try to save to localStorage (optional)
      try {
        // Get existing assessment submissions from localStorage
        const existingSubmissions = JSON.parse(localStorage.getItem('assessmentSubmissions') || '[]');
        
        // Add new submission
        existingSubmissions.push(assessmentData);
        
        // Save back to localStorage
        localStorage.setItem('assessmentSubmissions', JSON.stringify(existingSubmissions));
      } catch (localStorageError) {
        console.warn('LocalStorage save failed, but email was sent successfully:', localStorageError);
        // Don't fail the submission if localStorage fails
      }

      alert('Assessment submitted successfully! Your results have been sent to our team.');
      
      // Reset form and show results
      setStudentInfo({ name: '', email: '' });
      setShowSubmissionModal(false);
      setIsSubmitting(false);
      setTestResults(pendingResults);
      setPendingResults(null);

    } catch (error) {
      console.error('Error submitting assessment:', error);
      alert('There was an error submitting your results. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleSkipEmail = () => {
    setShowSubmissionModal(false);
    setStudentInfo({ name: '', email: '' });
    setIsSubmitting(false);
    setTestResults(pendingResults);
    setPendingResults(null);
  };

  const resetAssessment = () => {
    setSelectedAssessment(null);
    setCurrentQuestion(0);
    setAnswers({});
    setIsTestActive(false);
    setTestResults(null);
    setShowSubmissionModal(false);
    setStudentInfo({ name: '', email: '' });
    setPendingResults(null);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Modal Component
  const SubmissionModal = () => {
    if (!showSubmissionModal) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              <Save className="inline-block w-5 h-5 mr-2 text-blue-600" />
              Get Your Results
            </h3>
            <button
              onClick={handleSkipEmail}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                value={studentInfo.name}
                onChange={(e) => setStudentInfo({ ...studentInfo, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Email *
              </label>
              <input
                type="email"
                value={studentInfo.email}
                onChange={(e) => setStudentInfo({ ...studentInfo, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email address"
              />
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>What you'll receive:</strong>
              </p>
              <ul className="text-sm text-blue-700 mt-1 space-y-1">
                <li>• Your assessment score and results</li>
                <li>• Detailed breakdown of your answers</li>
                <li>• Correct answers for learning</li>
                <li>• Certificate of completion (if passed)</li>
              </ul>
            </div>
          </div>
          <div className="flex space-x-3 mt-6">
            <button
              onClick={handleSkipEmail}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Skip
            </button>
            <button
              onClick={handleSubmitResults}
              disabled={isSubmitting}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Submit Results
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (isTestActive && selectedAssessment) {
    const currentQ = selectedAssessment.questionsList[currentQuestion];
    const totalQuestions = selectedAssessment.questionsList.length;
    const progress = ((currentQuestion + 1) / totalQuestions) * 100;

    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Test Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">{selectedAssessment.title}</h2>
              <button
                onClick={resetAssessment}
                className="text-gray-500 hover:text-gray-700"
              >
                Exit Test
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Question {currentQuestion + 1} of {totalQuestions}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Timer */}
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-2" />
              Time remaining: {selectedAssessment.duration}
            </div>
          </div>

          {/* Question */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Question {currentQuestion + 1}: {currentQ.question}
            </h3>

            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <label
                  key={index}
                  className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors duration-200 ${
                    answers[currentQ.id] === index
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${currentQ.id}`}
                    value={index}
                    checked={answers[currentQ.id] === index}
                    onChange={() => handleAnswerSelect(currentQ.id, index)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 border-2 rounded-full mr-3 ${
                    answers[currentQ.id] === index
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {answers[currentQ.id] === index && (
                      <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                    )}
                  </div>
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            {currentQuestion === totalQuestions - 1 ? (
              <button
                onClick={submitAssessment}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Submit Assessment
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Next
              </button>
            )}
          </div>
        </div>

        <SubmissionModal />
      </div>
    );
  }

  if (testResults) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
              testResults.passed ? 'bg-green-100' : 'bg-red-100'
            }`}>
              {testResults.passed ? (
                <CheckCircle className="w-10 h-10 text-green-600" />
              ) : (
                <XCircle className="w-10 h-10 text-red-600" />
              )}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {testResults.passed ? 'Congratulations!' : 'Keep Learning!'}
            </h2>
            
            <p className="text-gray-600 mb-6">
              {testResults.passed 
                ? 'You have successfully passed the assessment.'
                : 'You need to score higher to pass this assessment.'
              }
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold text-blue-600">{testResults.score}%</div>
                  <div className="text-sm text-gray-600">Score</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">
                    {testResults.correctAnswers}/{testResults.totalQuestions}
                  </div>
                  <div className="text-sm text-gray-600">Correct Answers</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={resetAssessment}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Back to Assessments
              </button>
              
              {!testResults.passed && (
                <button
                  onClick={() => {
                    setTestResults(null);
                    setCurrentQuestion(0);
                    setAnswers({});
                  }}
                  className="w-full px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                >
                  Retake Assessment
                </button>
              )}
            </div>
          </div>
        </div>

        <SubmissionModal />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-10">
            <FileText className="inline-block w-8 h-8 mr-3 text-blue-600" />
            Assessments & Tests
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Test your knowledge and track your progress with our comprehensive assessments. 
            Complete assessments to earn certificates and track your learning journey.
          </p>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{assessments.length}</div>
              <div className="text-sm text-gray-600">Total Assessments</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{completedAssessments.length}</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {completedAssessments.length > 0 ? Math.round((completedAssessments.length / assessments.length) * 100) : 0}%
              </div>
              <div className="text-sm text-gray-600">Completion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {completedAssessments.length * 100}
              </div>
              <div className="text-sm text-gray-600">Points Earned</div>
            </div>
          </div>
        </div>

        {/* Assessments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assessments.map((assessment) => {
            const isCompleted = completedAssessments.includes(assessment.id);
            
            return (
              <div key={assessment.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${getDifficultyColor(assessment.difficulty)}`}>
                        {assessment.difficulty}
                      </span>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                        {assessment.category}
                      </span>
                    </div>
                    {isCompleted && (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    )}
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {assessment.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {assessment.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      Duration: {assessment.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FileText className="w-4 h-4 mr-2" />
                      Questions: {assessment.questions}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Target className="w-4 h-4 mr-2" />
                      Passing Score: {assessment.passingScore}%
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => startAssessment(assessment)}
                    className={`w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      isCompleted
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {isCompleted ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Completed
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Start Assessment
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Assessment Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
            <div className="flex items-start">
              <Clock className="w-5 h-5 mr-2 mt-0.5 text-blue-600" />
              <div>
                <strong>Time Management:</strong> Each assessment has a time limit. Manage your time wisely.
              </div>
            </div>
            <div className="flex items-start">
              <Target className="w-5 h-5 mr-2 mt-0.5 text-blue-600" />
              <div>
                <strong>Passing Score:</strong> You need to achieve the minimum passing score to complete the assessment.
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-600" />
              <div>
                <strong>Multiple Attempts:</strong> You can retake assessments if you don't pass on the first try.
              </div>
            </div>
            <div className="flex items-start">
              <Award className="w-5 h-5 mr-2 mt-0.5 text-blue-600" />
              <div>
                <strong>Certificates:</strong> Complete all assessments to earn course completion certificates.
              </div>
            </div>
          </div>
        </div>
      </div>

      <SubmissionModal />
    </div>
  );
};

export default Assessments; 