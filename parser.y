%{
#include <stdio.h>
#include <stdlib.h>

int yylex();
int yyparse();
void yyerror(const char *s);
%}

%union {
    int num;
}

%token <num> NUMBER
%type <num> expr term factor

%%

expr: expr '+' term { printf("%d + %d = %d\n", $1, $3, $1 + $3); }
    | expr '-' term { printf("%d - %d = %d\n", $1, $3, $1 - $3); }
    | term
    ;

term: term '*' factor { printf("%d * %d = %d\n", $1, $3, $1 * $3); }
    | term '/' factor { printf("%d / %d = %d\n", $1, $3, $1 / $3); }
    | factor
    ;

factor: NUMBER { $$ = $1; };

%%

void yyerror(const char *s) {
    fprintf(stderr, "Error: %s\n", s);
}

int main() {
    printf("Enter an expression:\n");
    yyparse();
    return 0;
}
