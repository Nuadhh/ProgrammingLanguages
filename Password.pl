
use strict;
use warnings;
use Getopt::Long;


sub usage {
    print <<"END_USAGE";
Password Generator
Usage: perl password_generator.pl [options]
Options:
  --length N       Length of the password (default: 12)
  --uppercase      Include uppercase letters (A-Z)
  --lowercase      Include lowercase letters (a-z)
  --numbers        Include numbers (0-9)
  --special        Include special characters (!@#\$%^&*)
  --help           Show this help message
END_USAGE
    exit;
}


my $length = 12;
my $use_uppercase = 0;
my $use_lowercase = 0;
my $use_numbers = 0;
my $use_special = 0;
my $help = 0;


GetOptions(
    'length=i'    => \$length,
    'uppercase'   => \$use_uppercase,
    'lowercase'   => \$use_lowercase,
    'numbers'     => \$use_numbers,
    'special'     => \$use_special,
    'help'        => \$help,
) or usage();


usage() if $help;


my @chars;
push @chars, ('A'..'Z') if $use_uppercase;
push @chars, ('a'..'z') if $use_lowercase;
push @chars, ('0'..'9') if $use_numbers;
push @chars, split //, '!@#$%^&*' if $use_special;


unless (@chars) {
    print "Error: No character set selected. Use --uppercase, --lowercase, --numbers, or --special.\n";
    usage();
}


my $password = '';
for (1..$length) {
    $password .= $chars[rand @chars];
}


print "Generated Password: $password\n";