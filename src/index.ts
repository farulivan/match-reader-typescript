import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// Load the file
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// Console Report
const consoleSummary = Summary.winsAnalysisWithConsoleReport('Fulham');
consoleSummary.buildAndPrintReport(matchReader.matches);

// HTML Report
const htmlSummary = Summary.winsAnalysisWithHtmlReport('Chelsea');
htmlSummary.buildAndPrintReport(matchReader.matches);
