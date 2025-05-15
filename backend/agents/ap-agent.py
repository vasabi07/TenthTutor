"""
an answerpaper will be submitted. reaches the planner node...we collect qp from
the qpid in submitted ap. then get questions list and equate them with each answer using the position
send it the answer correction node
we run a loop in answercorrection node..and pass each question and answer. we need to get the retrived docs for each question as well.
ask it to evaluate and fill required fields for each question.
we append it to a list and then finally add it to answers list with all the 
mark       Float?
  llmRemark  String?
  strengths  String?
  weaknesses String? details for each question 
then pass to the generator node which calculates total writes overall ap remark 
then send it to db 
with another httpx req going to backend where we can form a Answerpaper with questions and answers with mark remark details as pdf in nextjs api route.

"""


