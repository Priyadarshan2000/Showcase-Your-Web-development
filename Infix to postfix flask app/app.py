from flask import Flask,render_template,redirect,request

app=Flask(__name__)

OPERATORS = set(['+', '-', '*', '/', '(', ')', '^'])  # set of operators
PRIORITY = {'+':1, '-':1, '*':2, '/':2, '^':3} # dictionary having priorities 

def infix_to_postfix(expression): #input expression
    stack = [] # initially stack empty
    output = '' # initially output empty
    for ch in expression:
        if ch not in OPERATORS:  # if an operand then put it directly in postfix expression
            output+= ch
        elif ch=='(':  # else operators should be put in stack
            stack.append('(')
        elif ch==')':
            while stack and stack[-1]!= '(':
                output+=stack.pop()
            stack.pop()
        else:
            while stack and stack[-1]!='(' and PRIORITY[ch]<=PRIORITY[stack[-1]]:
                output+=stack.pop()
            stack.append(ch)
    while stack:
        output+=stack.pop()
    return output
    
    
@app.route('/')
def hi():
    return render_template("input.html")
@app.route('/submit',methods=['POST'])
def get_data():
    if request.method=='POST':
        s=request.form['Infix']
        postfix=infix_to_postfix(s)
        return render_template("output.html",postfix=postfix)
    return "Invalid"

if __name__=="__main__":
    app.run(debug=True)